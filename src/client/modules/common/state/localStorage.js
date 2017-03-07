/**
* encode and store an object in local storage
*/
export function setLocalStorageItem(key, value) {

  try {
    return localStorage.setItem(key, btoa(JSON.stringify(value)));
  } catch (err) {
    throw new Error(err);
  }
}

/**
* decode and get an existing object in local storage
*/
export function getLocalStorageItem(key) {
  try {
    const state = localStorage.getItem(key);

    const stateJson = state ? JSON.parse(atob(state)) : undefined;

    return stateJson;
  } catch (err) {
    throw new Error(err);
  }
}

export function removeLocalStorageItem(key) {
  localStorage.removeItem(key);
}
