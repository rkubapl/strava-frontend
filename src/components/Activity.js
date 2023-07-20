import './Activity.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Activity({name, ic, distance, goal, color}) {
    return (
        <div className="activity">
            <div className="up">
                <div className="title">
                    <FontAwesomeIcon icon={`fa-solid ${ic}`} size="xl" />
                    <span className="medium">{name}</span>
                </div>
                <span className="light">{distance.toFixed(3)} km/{goal} km</span>
            </div>
            <div className="animated-progress">
                <span style={{"width": ((distance/goal)*100) + "%", "background-color": color}}></span>
            </div>
        </div>
    );
}

export default Activity;
