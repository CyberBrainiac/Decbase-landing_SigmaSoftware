"use strict"

function dontSpamRequest(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}