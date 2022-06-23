import Step from "components/Step";
import { getNormalSteps } from "utils/trip-utils";
import StepMoreInfo from "components/StepMoreInfo";
import TripHeader from "./TripHeader";
import { useState } from "react";
import "./style.css";

/**
 * @param {Object} props
 * @param {Trip} props.trip
 */
function Trip({ trip }) {
    /** @type {[Step, React.Dispatch<Step>]} */
    const [openStep, setOpenStep] = useState(null);

    return (
        <>
            <TripHeader trip={trip} />
            <div className="trip__step-list">
                {getNormalSteps(trip.all_steps).map((step) => (
                    <Step
                        step={step}
                        key={step.id}
                        onOpen={() => setOpenStep(step)}
                    />
                ))}
            </div>
            {openStep && (
                <StepMoreInfo
                    step={openStep}
                    onClose={() => setOpenStep(null)}
                />
            )}
        </>
    );
}

export default Trip;
