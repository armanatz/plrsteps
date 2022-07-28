import { useCallback, useEffect, useState, useContext } from "react";
import Map, { Marker, Source, Layer } from "react-map-gl";
import StepContext from "../../contexts/StepContext";
import "mapbox-gl/dist/mapbox-gl.css";
import "./style.css";

function TripMap({ allSteps }) {
    const markers = allSteps.filter((step) => Object.hasOwn(step, "supertype"));

    const [mapNode, setMapNode] = useState(null);

    const mapRef = useCallback((node) => {
        if (node !== null) {
            setMapNode(node);
        }
    }, []);

    const { currentStep } = useContext(StepContext);

    const setInitMapBounds = useCallback(
        (startBound, endBound) => {
            mapNode.fitBounds([startBound, endBound], {
                padding: 250,
                duration: 1000,
            });
        },
        [mapNode]
    );

    useEffect(() => {
        if (mapNode) {
            setInitMapBounds(
                [markers[0].location.lon, markers[0].location.lat],
                [
                    markers[markers.length - 1].location.lon,
                    markers[markers.length - 1].location.lat,
                ]
            );
        }
    }, [mapNode, markers, setInitMapBounds]);

    useEffect(() => {
        if (currentStep !== null) {
            mapNode.flyTo({
                center: [currentStep.location.lon, currentStep.location.lat],
                duration: 2000,
                zoom: 12,
            });
        }
    }, [currentStep, mapNode]);

    const geojson = {
        type: "FeatureCollection",
        features: [
            {
                type: "Feature",
                geometry: {
                    type: "LineString",
                    coordinates: allSteps.map((step) => [
                        step.location.lon,
                        step.location.lat,
                    ]),
                },
            },
        ],
    };

    const layerStyle = {
        id: "point",
        type: "line",
        layout: {
            "line-join": "round",
            "line-cap": "round",
        },
        paint: {
            "line-color": "#fff",
            "line-width": 2,
        },
    };

    return (
        <div className="trip-map">
            <Map ref={mapRef} mapStyle="mapbox://styles/mapbox/satellite-v9">
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
                <Source id="tripRoute" type="geojson" data={geojson}>
                    <Layer {...layerStyle} />
                </Source>
            </Map>
        </div>
    );
}

export default TripMap;
