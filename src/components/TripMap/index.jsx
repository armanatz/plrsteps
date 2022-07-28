import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import "./style.css";

function TripMap() {
    return (
        <div className="trip-map">
            <Map
                mapStyle="mapbox://styles/mapbox/satellite-v9"
            />
        </div>
    );
}

export default TripMap;
