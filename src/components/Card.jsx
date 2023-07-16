import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import './Card.css';

function Card(props) {
  return (
    <section className="card">
      <img className="card--image" src={props.imageUrl} alt={props.location} />
      <div className="card--location">
        <div className="card--location-info">
          <FontAwesomeIcon
            className="card--location-icon"
            icon={faLocationDot}
          />
          <span className="card--location-name">{props.location}</span>
          <a
            className="card--location-map"
            href={props.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </a>
        </div>
        <div className="card--title">{props.title}</div>
        <div className="card--dates">{`${props.startDate} - ${props.endDate}`}</div>
        <div className="card--desc">{props.description}</div>
      </div>
    </section>
  );
}

export default Card;
