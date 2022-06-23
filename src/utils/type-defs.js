/**
 * An identifier, can be string or number
 *
 * @typedef {(number|string)} Id
 */

/**
 * Trip
 *
 * @typedef {object} Trip
 * @property {Id} [id]
 * @property {Id} [user_id]
 * @property {string} [uuid]
 * @property {Media} [cover_media]
 * @property {string} name
 * @property {string} summary
 * @property {string} timezone_id
 * @property {number} start_date (Unix time)
 * @property {User} user
 * @property {AnyStep[]} all_steps
 */

/**
 * User
 *
 * @typedef {object} User
 * @property {Id} [id]
 * @property {string} [uuid]
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} description
 * @property {string} username
 * @property {string} [profile_image_path]
 * @property {string} [profile_image_thumb_path]
 */

/**
 * Step of any kind, might be breadcrumbs or full steps
 *
 * @typedef {(Step|BreadcrumbStep)} AnyStep
 */

/**
 * Step
 *
 * @typedef {object} Step
 * @property {Id} [id]
 * @property {Id} [location_id]
 * @property {Id} [trip_id]
 * @property {string} [uuid]
 * @property {PSLocation} location
 * @property {Media[]} media
 * @property {string} [name]
 * @property {number} start_time (Unix time)
 * @property {"normal"} supertype
 * @property {string} [description]
 * @property {string} timezone_id
 * @property {string} [weather_condition]
 * @property {number} [weather_temperature_condition]
 */

/**
 * BreadcrumbStep
 *
 * @typedef {object} BreadcrumbStep
 * @property {Id} [id]
 * @property {Id} [trip_id]
 * @property {string} [uuid]
 * @property {PSLocation} location
 */

/**
 * PSLocation
 *
 * @typedef {object} PSLocation
 * @property {Id} [id]
 * @property {string} country_code
 * @property {string} detail Country of the location
 * @property {string} [full_detail] State or country of the location
 * @property {string} name Locality (city, town) of the location
 * @property {number} lat
 * @property {number} lon
 */

/**
 * Media
 *
 * @typedef {object} Media
 * @property {Id} [id]
 * @property {Id} [step_id]
 * @property {string} [uuid]
 * @property {string} [cdn_path]
 * @property {string} [description]
 * @property {number} [full_res_height]
 * @property {number} [full_res_width]
 * @property {string} small_thumbnail_path Small resolution image path (around 100x100)
 * @property {string} large_thumbnail_path Medium resolution image path (around 900x900)
 * @property {string} [path] High resolution image path (around 3500x3500). Not always present, since it is uploaded async.
 * @property {number} [order] Order of image within the containing step
 * @property {number} [type] 0 for image, 1 for video
 */

/** Store state */

/**
 * TripsState
 *
 * @typedef {object} TripsState
 * @property {Object.<number|string, boolean>} loadingById
 * @property {Object.<number|string, Trip>} tripsById
 * @property {Object.<number|string, boolean>} errorsLoadingById
 */

/**
 * RootState
 *
 * @typedef {object} RootState
 * @property {TripsState} trips
 */
