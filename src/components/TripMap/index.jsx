import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./style.css";

function TripMap({ allSteps }) {
    const markers = allSteps.filter((step) => Object.hasOwn(step, "supertype"));

    return (
        <div className="trip-map">
            <Map mapStyle="mapbox://styles/mapbox/satellite-v9">
                {markers.map((marker) => (
                    <Marker
                        key={marker.id}
                        latitude={marker.location.lat}
                        longitude={marker.location.lon}
                    >
                        <img
                            alt={marker.location.name}
                            src={marker.media[0].small_thumbnail_path}
                            style={{
                                borderRadius: "100%",
                                width: 30,
                                height: 30,
                                border: "2px white solid",
                            }}
                        />
                    </Marker>
                ))}
            </Map>
        </div>
    );
}

export default TripMap;
