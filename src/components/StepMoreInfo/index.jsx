import { useCallback, useState } from "react";
import { GoogleMap } from "@react-google-maps/api";
import { getStepName } from "../../utils/step-utils";
import PSButton from "../PSButton";
import Place from "../Place";
import "./style.css";

/**
 * @param {Object} props
 * @param {Step} props.step
 * @param {() => void} props.onClose
 */
function StepMoreInfo({ step, onClose }) {
    const [interestingPlaces, setInterestingPlaces] = useState([]);

    const onLoad = useCallback(
        (mapInstance) => {
            const location = new window.google.maps.LatLng(
                step.location.lat,
                step.location.lon
            );
            const request = { location, radius: 100 };
            const service = new window.google.maps.places.PlacesService(
                mapInstance
            );
            service.nearbySearch(request, (results, status) => {
                if (
                    status === window.google.maps.places.PlacesServiceStatus.OK
                ) {
                    setInterestingPlaces(results.map((place) => place));
                }
            });
        },
        [step]
    );

    const renderMap = () => {
        return <GoogleMap onLoad={onLoad} />;
    };

    return (
        <div className="step-more-info">
            <div className="step-more-info__content">
                <PSButton label="Close" onClick={onClose} />
                <>
                    <h2>{getStepName(step)}</h2>
                    <h3>
                        {step.location.name}{" "}
                        {step.location.detail && (
                            <span>({step.location.detail})</span>
                        )}
                    </h3>

                    {step.description && <p>{step.description}</p>}
                    {interestingPlaces.length > 0 ? (
                        <>
                            <h4>Things to do in {step.location.name}:</h4>
                            <div
                                style={{
                                    overflow: "scroll",
                                    height: "65vh",
                                    overflowX: "hidden",
                                }}
                            >
                                {interestingPlaces.map((place) => {
                                    return (
                                        <Place
                                            key={place.place_id}
                                            data={place}
                                        />
                                    );
                                })}
                            </div>
                        </>
                    ) : null}
                    {renderMap()}
                </>
            </div>
        </div>
    );
}

export default StepMoreInfo;
