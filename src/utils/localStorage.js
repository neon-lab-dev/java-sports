/**
 * Retrieves the value from the local storage based on the provided key.
 * If the value is not found, returns the default value.
 * If the value is a valid JSON string, parses and returns the parsed value.
 * If the value is not a valid JSON string, returns the original value.
 *
 * @param {string} key - The key to retrieve the value from local storage.
 * @param {any} defaultValue - The default value to return if the value is not found in local storage.
 * @returns {any} - The retrieved value from local storage or the default value.
 */
export const getLocalStorage = (key, defaultValue) => {
  const value = localStorage.getItem(key);
  if (!value) return defaultValue;
  try {
    return JSON.parse(value);
  } catch (e) {
    return value;
  }
};

/**
 * Sets a value in the local storage with the specified key.
 * If the value is a string, it is stored directly. If it is an object or array, it is stored as a JSON string.
 * @param {string} key - The key to store the value under.
 * @param {string|object|array} value - The value to be stored.
 * @throws {Error} If key or value is not provided.
 */
export const setLocalStorage = (key, value) => {
  if (!value || !key) {
    throw new Error("key and value are required");
  }
  if (typeof value === "string") {
    localStorage.setItem(key, value);
  } else {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
