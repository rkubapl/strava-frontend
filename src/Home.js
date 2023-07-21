import './Home.css';
import {useEffect, useState} from "react";
import Activity from "./components/Activity";
import LastActivity from "./components/LastActivity";

function Home() {
    // const [password, setPassword] = useState();

    function promptUserPassword() {
        const passwd = prompt("Proszę podać hasło");
        loadData(passwd);
    }

    const [data, setData] = useState({stats: []});
    const [countdown, setCountdown] = useState({loaded: false});

    useEffect(() => {
        if(localStorage.getItem("password")) {
            loadData(localStorage.getItem("password"));
        } else promptUserPassword()
    }, []);

    function loadData(password) {
        fetch(process.env.REACT_APP_API_URL + "/stats?password=" + password)
            .then(resp => resp.json())
            .then(data => {
                if(data.password) {
                    setData(data)
                    localStorage.setItem("password", password)
                } else {
                    setTimeout(promptUserPassword(), 2000)
                }
            });
    }
    function getActivity(name) {
        return data.stats.find(activity => activity.name === name)
    }

    const formatNumber = n => ("0" + n).slice(-2);

    function toDate(timestamp) {
        const date = new Date(timestamp*1000);

        return (formatNumber(date.getHours()) + ":" + formatNumber(date.getMinutes()) + ":" + formatNumber(date.getSeconds()) + " " + formatNumber(date.getDate()) + "/"+ formatNumber(date.getMonth()+1) + "/"+ date.getFullYear());
    }

    var countDownDate = new Date("Sep 4, 2023 00:00:00").getTime();

    function updateCountdown() {
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var periodOfTime = countDownDate - new Date(1687557600*1000);
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown({loaded: true, finished: false, days, hours, minutes, seconds, percent: ((distance/periodOfTime)*100).toFixed(2)});

        if (distance < 0) {
            clearInterval(x);
            setCountdown({loaded: true, finished: true});
        }
    }

    if(!countdown.loaded) {
        updateCountdown()
        // setCountdown({...countdown, percent: (countdown.days/72)*100})
    }
    var x = setInterval(updateCountdown, 1000);

    function countAvg(data) {
        const missing = data.goal - data.distance;

        if(missing > 0) {
            return (missing/countdown.days).toFixed(2);
        } else {
            return -1;
        }
    }

    const icon = {
        "Walk": "fa-person-walking",
        "Ride": "fa-bicycle"
    }

  return (
    <div className="App">
        <div className="container">
            <h1 className="heading">Aktywność sportowa</h1>
            <h1 className="subheading">{!countdown.finished ? `Do końca wakacji: ${countdown.days}d ${countdown.hours}h ${countdown.minutes}m ${countdown.seconds}s (${countdown.percent}%)` : "Po czasie!"}</h1>
            <div className="activities">
                {getActivity("Ride") && <Activity data={getActivity("Ride")} ic="fa-bicycle" name="Jazda na rowerze" color="#639fff" avg={countAvg(getActivity("Ride"))} />}
                {getActivity("Walk") && <Activity data={getActivity("Walk")} ic="fa-person-walking" name="Spacerowanie" color="#ff9b00" avg={countAvg(getActivity("Walk"))} />}
            </div>
            <h1 className="subheading">Ostanie aktywności sportowe</h1>
            <div className="lastActivities">
                {data.lastActivities && data.lastActivities.map(activity => <LastActivity ic={icon[activity.type]} elapsed_time={activity.elapsed_time} name={activity.name} date={new Date(activity.date)} distance={activity.distance}/>)}
            </div>
            <span className="update">Ostatnia aktualizacja: {data.updateTime ? toDate(data.updateTime) : "Nie załadowano danych"}<br/>Status autoryzacji: {data.auth ? "OK" : "Potrzebna autoryzacja"}<br /><a href="#" onClick={() => localStorage.removeItem("password")}>Usuń hasło</a></span>
        </div>
    </div>
  );
}

export default Home;
