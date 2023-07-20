import './Activity.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Activity({name, ic, data, color, avg}) {
    return (
        <div className="activity">
            <div className="up">
                <div className="title">
                    <span className="icon">
                        <FontAwesomeIcon icon={`fa-solid ${ic}`} size="xl" />
                    </span>
                    <span className="medium">{name}</span>
                </div>
                <span className="light">{data.distance.toFixed(3)} km/{data.goal} km</span>
            </div>
            <div className="animated-progress">
                <span style={{"width": ((data.distance/data.goal)*100) + "%", "background-color": color}}></span>
            </div>
            <div className="up">
                {avg !== -1 && <span className="light2">{`Średnio ${avg}km dziennie aby osiągnąć cel.`}</span>}
            </div>
        </div>
    );
}

export default Activity;
