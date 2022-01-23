import react from "react";

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.item.imageUrl} alt=""></img>
            <div className="travel-data">
                <div className="travel-data--location">
                    <i class="fas fa-map-marker-alt"></i>
                    <h3>{props.item.location}</h3>
                    <a href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <h1>{props.item.title}</h1>
                <h3 className="planned-year">Planned year of travel: {props.item.plannedVisit}</h3>
                <p className="description">{props.item.description}</p>
            </div>
            <div className="line"></div>
        </div>
    )
}