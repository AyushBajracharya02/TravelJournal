import locationpin from '../Images/location-dot-solid.svg';
import '../Styles/Location.css';

export default function Location({props}) {
    return (
        <div className="location-card">
            <img className="location-img" src={props.img} alt={`location ${props.id}`} />
            <div className="content">
                <div className="card-header">
                    <img src={locationpin} alt={`locationpin ${props.id}`} />
                    <span>{props.country.toUpperCase()}</span>
                    <a href={props.link} target="_blank">View on Google Maps</a>
                </div>
                <div>
                    <h2>{props.name}</h2>
                    <p>
                        <b>{props.date.start} - {props.date.end}</b>
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
    )
}