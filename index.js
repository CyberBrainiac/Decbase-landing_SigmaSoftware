"use strict"

window.addEventListener('load', appendScripts, {once: true});

function appendScripts() {
  const allScrptsSrc = [
    "./common.blocks/overlay/overlay.js",
    "./common.blocks/service/getData.js",
  ];

  const loadedScriptPromise = [];

  for(const scriptSrc of allScrptsSrc) {
    const script = document.createElement('script');
    script.src = scriptSrc;
    document.head.appendChild(script);

    loadedScriptPromise.push(
      new Promise((resolve, reject) => {
        script.onload = () => {
          resolve(true);
        };
        script.onerror = (err) => {
          reject(err);
        }
      })
    );
  }

  Promise.all(loadedScriptPromise)
    .then(() => {
      console.log("all scripts success loaded");
    })
    .catch(error => {
      console.error(`Error load script: ${error.target.src}`);
    });
}