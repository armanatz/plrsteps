import { getStepName } from "../../utils/step-utils";
import PSButton from "../PSButton";
import "./style.css";

/**
 * @param {Object} props
 * @param {Step} props.step
 * @param {() => void} props.onOpen
 */
function Step({ onOpen, step }) {
    const stepName = getStepName(step);

    return (
        <div className="step">
            <PSButton label="View more info" onClick={onOpen} />

            <h2>{stepName}</h2>
            <h3>
                {step.location.name}{" "}
                {step.location.detail && <span>({step.location.detail})</span>}
            </h3>

            {step.description && <p>{step.description}</p>}
            {step.media.length && (
                <div className="step__media">
                    {step.media.map((mediaItem) => (
                        <div className="step__media-item" key={mediaItem.id}>
                            <img
                                src={mediaItem.large_thumbnail_path}
                                alt={mediaItem.description || stepName}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Step;
