import './LastActivity.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function LastActivity({name, type, date, ic, elapsed_time, distance}) {
    function n(num, len = 2) {
        return `${num}`.padStart(len, '0');
    }

    return (
        <div className="lastactivity">
            <span className="ic">
                <FontAwesomeIcon icon={`fa-solid ${ic}`} size="3x" />
            </span>
            <div className="info">
                <span className="infoTitle">{name} - {(distance/1000).toFixed(2)}km</span>
                <span className="infoDesc">{n(Math.floor(elapsed_time/3600))}:{n(Math.floor((elapsed_time%3600)/60))} - {n(date.getDate())}.{n(date.getMonth()+1)}.{date.getFullYear()}</span>
            </div>
        </div>
    );
}

export default LastActivity;
