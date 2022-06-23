import memoize from "fast-memoize";

/**
 * Gets the steps within a list that are "full" steps, not breadcrumbs
 *
 * @param {AnyStep[]} stepList
 * @returns {Step[]}
 */
export const getNormalSteps = memoize(getNormalStepsNotMemo);

/**
 * @param {AnyStep[]} stepList
 * @returns {Step[]}
 */
function getNormalStepsNotMemo(stepList = []) {
    // @ts-ignore
    return stepList.filter((step) => step.supertype === "normal");
}
