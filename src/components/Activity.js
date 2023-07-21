import './Activity.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Activity({name, ic, data, color, avg}) {
    function percent() { return ((data.distance/data.goal)*100) };

    function toDecimalStr(value) {
        let str=value.toFixed(1).replace(/([0]+)$/,"");
        try {
            if (str.endsWith(".")) str+='0';
        } catch (e) {
            str+='0';
        }
        return str;
    }

    return (
        <div className="activity">
            <div className="up">
                <div className="title">
                    <span className="icon">
                        <FontAwesomeIcon icon={`fa-solid ${ic}`} size="xl" />
                    </span>
                    <span className="medium">{name}</span>
                </div>
                <span className="light">{parseFloat(data.distance.toFixed(3))} km/{data.goal} km</span>
            </div>
            <div className="animated-progress">
                <span className="progress-span">{parseFloat(percent().toFixed(1))}%</span>
                <span className="progress" style={{"width": percent() + "%", "background-color": color}}></span>
            </div>
            <div className="up">
                {avg !== -1 && <span className="light2">{`Średnio ${avg}km dziennie aby osiągnąć cel.`}</span>}
            </div>
        </div>
    );
}

export default Activity;
