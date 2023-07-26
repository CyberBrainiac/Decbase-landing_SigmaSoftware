"use strict"

window.addEventListener('load', appendScripts, {once: true});

function appendScripts() {
  const allScrptsSrc = [
    "./common.blocks/overlay/overlay.js",
    "./utils/checkDataType.js",
    "./utils/errorHandlers.js",
    "./utils/GET-request.js",
    "./utils/dontSpam.js",
    "./utils/tempStorage.js",
    "./utils/eventHandlers.js",

    "./common.blocks/service/content/createContent.js",
    "./common.blocks/service/content/removeContent.js",
    "./common.blocks/service/getProduct.js",
    "./common.blocks/service/filtr/all-filtr.js",
    "./common.blocks/service/filtr/category-filtr.js",
  ];

  const loadedScriptPromise = [];

  for(const scriptSrc of allScrptsSrc) {
    const script = document.createElement('script');
    script.src = scriptSrc;
    document.head.appendChild(script);

    loadedScriptPromise.push(
      new Promise((resolve, reject) => {
        script.onload = () => {
          // console.log(script.src);
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
      allFiltr(); //default filter in Service section
      serviceHandlers();
    })
    .catch(error => {
      console.error(`Error load script: ${error.target.src}`);
    });
}