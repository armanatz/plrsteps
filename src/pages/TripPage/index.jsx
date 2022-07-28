import React, { useEffect, useState } from "react";
import Trip from "../../components/Trip";
import TripMap from "../../components/TripMap";
import { useLoadScript } from "@react-google-maps/api";
import { useParams } from "react-router-dom";
import { getTripById } from "../../api/trips.api";
import "./style.css";

const MAP_LIBRARIES = ["places"];

export default function TripPage() {
    const { tripId } = useParams();
    const { trip, isLoading } = useTrip(tripId);

    const { isLoaded: isGMapScriptLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_PLACES_API_KEY,
        libraries: MAP_LIBRARIES,
    });

    return (
        <>
            {isGMapScriptLoaded && isLoading && <div>Loading...</div>}
            {trip && (
                <div className="trip-page">
                    <div className="trip-page__sidebar">
                        <Trip trip={trip} />
                    </div>
                    <div className="trip-page__main">
                        <TripMap allSteps={trip.all_steps} />
                    </div>
                </div>
            )}
        </>
    );
}

/**
 *
 * @param {string?} tripId
 */
// TODO: we could use useSWR for this!
function useTrip(tripId) {
    const [isLoading, setIsLoading] = useState(true);
    /** @type {[Trip, React.Dispatch<Trip>]} */
    const [trip, setTrip] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!tripId) {
            setIsLoading(false);
            setTrip(null);
        }
        setIsLoading(true);
        getTripById(tripId)
            .then((tripFromDB) => {
                setTrip(tripFromDB);
            })
            .catch((e) => {
                setError(e);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [tripId]);

    return { trip, isLoading, error };
}
