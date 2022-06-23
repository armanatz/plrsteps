import faketrip from "./fake-trip.json";

/** @type {Trip} */
const fakeTrip = faketrip;
/**
 * Gets a trip from the DB
 *
 * @param {Id} tripId
 * @returns {Promise<Trip>}
 */
export const getTripById = (tripId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                ...fakeTrip,
                id: tripId,
            });
        }, 500);
    });
};
