import { getStepName } from "utils/step-utils";
import PSButton from "components/PSButton";
import "./style.css";

/**
 * @param {Object} props
 * @param {Step} props.step
 * @param {() => void} props.onClose
 */
function StepMoreInfo({ step, onClose }) {
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
                    <div>TODO: interesting things to do</div>
                </>
            </div>
        </div>
    );
}

export default StepMoreInfo;
