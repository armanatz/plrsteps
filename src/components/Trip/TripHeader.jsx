import "./TripHeader.css";

/**
 * @param {Object} props
 * @param {Trip} props.trip
 */
function TripHeader(props) {
    return (
        <div className="trip-header">
            <div
                className="trip-header__bg"
                style={{
                    backgroundImage: `url(${props.trip.cover_media?.large_thumbnail_path})`,
                }}
            />
            <div className="trip-header__content">
                <h1>{props.trip.name}</h1>
                <p>{props.trip.summary}</p>
            </div>
        </div>
    );
}

export default TripHeader;
