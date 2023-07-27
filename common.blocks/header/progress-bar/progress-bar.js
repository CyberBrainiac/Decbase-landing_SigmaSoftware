"use strict"

function updateProgressBar() {
  const progressBar = document.querySelector('.progress-bar__scale');
  const currentPosition = getBottomViewPort();
  const pageHeight = getFullPageHeight();
  const progress = Math.ceil((currentPosition / pageHeight) * 100) + 1;

  progressBar.style.width = `${progress}%`;

  /**Some old browser may have incorrect value in document.documentElement.scrollHeight property*/
  function getFullPageHeight() {
    const fullHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );

    return fullHeight;
  }

  function getBottomViewPort() {
    const bottomViewport = window.scrollY + window.innerHeight;
    return bottomViewport;
  }
}




