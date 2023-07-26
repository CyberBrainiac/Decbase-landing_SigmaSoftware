"use strict"

function setObjectInSessionStorage(key, object) {
  const serializedObject = JSON.stringify(object);
  sessionStorage.setItem(key, serializedObject);
}

function getObjectFromSessionStorage(key) {
  const serializedObject = sessionStorage.getItem(key);
  if (serializedObject) {
    const object = JSON.parse(serializedObject);
    return object;
  }
  return null;
}

function isKeyInSessionStorage(key) {
  if (!key || typeof key !== 'string') {
    throw new Error('Key must be a non-empty string.');
  }

  try {
    return key in sessionStorage;
  } catch (error) {
    console.error('Error while accessing session storage:', error);
    return false;
  }
}
