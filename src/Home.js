import './Home.css';
import {useEffect, useState} from "react";
import Activity from "./components/Activity";

function Home() {
    const [data, setData] = useState({activities: []});

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + "/stats")
            .then(resp => resp.json())
            .then(data => setData(data));
    }, []);

    function getActivity(name) {
        return data.activities.find(activity => activity.name === name)
    }

    const formatNumber = n => ("0" + n).slice(-2);

    function toDate(timestamp) {
        const date = new Date(timestamp*1000);

        return (formatNumber(date.getHours()) + ":" + formatNumber(date.getMinutes()) + ":" + formatNumber(date.getSeconds()) + " " + formatNumber(date.getDate()) + "/"+ formatNumber(date.getMonth()+1) + "/"+ date.getFullYear());
    }

  return (
    <div className="App">
        <div className="container">
            <h1 className="heading">Aktywność sportowa</h1>
            <div className="activities">
                {getActivity("Ride") && <Activity distance={getActivity("Ride").distance} goal={getActivity("Ride").goal} ic="fa-bicycle" name="Jazda na rowerze" color="#639fff" />}
                {getActivity("Walk") && <Activity distance={getActivity("Walk").distance} goal={getActivity("Walk").goal} ic="fa-person-walking" name="Spacerowanie" color="#ff9b00" />}
            </div>
            <span className="update">Ostatnia aktualizacja: {data.updateTime ? toDate(data.updateTime) : "Nie załadowano danych"}<br/>Status autoryzacji: {data.auth ? "OK" : "Potrzebna autoryzacja"}</span>
        </div>
    </div>
  );
}

export default Home;
