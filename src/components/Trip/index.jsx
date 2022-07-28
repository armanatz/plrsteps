import Step from "../Step";
import { getNormalSteps } from "../../utils/trip-utils";
import StepMoreInfo from "../StepMoreInfo";
import TripHeader from "./TripHeader";
import { useState, useContext } from "react";
import StepContext from "../../contexts/StepContext";
import "./style.css";

/**
 * @param {Object} props
 * @param {Trip} props.trip
 */
function Trip({ trip }) {
    /** @type {[Step, React.Dispatch<Step>]} */
    const [openStep, setOpenStep] = useState(null);

    const { setCurrentStep } = useContext(StepContext);

    return (
        <>
            <TripHeader trip={trip} />
            <div className="trip__step-list">
                {getNormalSteps(trip.all_steps).map((step) => (
                    <Step
                        step={step}
                        key={step.id}
                        onOpen={() => {
                            setCurrentStep(step);
                            return setOpenStep(step);
                        }}
                    />
                ))}
            </div>
            {openStep && (
                <StepMoreInfo
                    step={openStep}
                    onClose={() => {
                        setCurrentStep(null);
                        return setOpenStep(null);
                    }}
                />
            )}
        </>
    );
}

export default Trip;
