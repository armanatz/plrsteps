/**
 * Gets the name to show for a step. If no custom name is provided it will resort to the location name.
 *
 * @param {Step} step
 * @returns {string}
 */
export const getStepName = (step) => {
    return (
        step.name ||
        step.location?.name ||
        step.location?.detail ||
        "Unnamed step"
    );
};
