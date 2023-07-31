"use strict"

window.addEventListener('load', appendScripts, {once: true});

function appendScripts() {
  const allScrptsSrc = [
		/**SCRIPTS HELPER*/
		"./utils/userScrollHandler.js",
    "./utils/checkDataType.js",
    "./utils/errorHandlers.js",
    "./utils/GET-request.js",
    "./utils/tempStorage.js",
    "./utils/throttle.js",

		/**TARGET SCRIPT*/
    "./common.blocks/service/getProduct.js",
    "./common.blocks/service/content/createContent.js",
    "./common.blocks/service/content/removeContent.js",
    "./common.blocks/service/filtr/all-filtr.js",
    "./common.blocks/service/filtr/category-filtr.js",
    "./common.blocks/completed-work/work-achives/moveBlock.js",
		"./common.blocks/testimonials/testimonials-container/calcCardWidth.js",
		"./common.blocks/news/isElementVisible.js",
		"./common.blocks/surprize/surprize.js",
		"./common.blocks/user-afk/isUserAFK.js",
		"./common.blocks/footer/getSystemYear.js",

		/**HANDLERS*/
		"./common.blocks/header/progress-bar/progress-bar.js",
    "./common.blocks/completed-work/work-achives/mouseMoveHandler.js",
    "./common.blocks/service/serviceHandler.js",
		"./common.blocks/testimonials/testimonialsHandler.js",
		"./common.blocks/news/newsHandler.js",
		"./common.blocks/sign-up/formHandler.js",
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

      monitoringUserScroll(); //check is user scrolling
      monitoringMousemove();  //check is user moving mouse
      serviceHandlers(); //get API data and check filtrs
      allFiltr(); //default filter in Service section
			testimonialsHandler(); //set testimonial to base position
			formHandler(); //listen form events
			isUserAFK(); //start monitoring user activity
			getSystemYear(); //set system year to footer
    })
    .catch(error => {
      console.error(error);
    });
}