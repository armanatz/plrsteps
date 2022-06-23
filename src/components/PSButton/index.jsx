import classNames from "classnames";
import "./style.css";

/**
 *
 * @param {Object} props
 * @param {string} [props.className]
 * @param {string} [props.label]
 * @param {(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void} [props.onClick]
 */
function PSButton(props) {
    return (
        <button
            onClick={props.onClick}
            className={classNames("ps-button", props.className)}
        >
            {props.label}
        </button>
    );
}

export default PSButton;
