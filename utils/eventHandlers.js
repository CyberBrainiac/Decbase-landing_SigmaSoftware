"use strict"

function serviceHandlers() {
  const buttons = document.querySelectorAll(".filtr > button");

  buttons.forEach(button => {
    button.addEventListener('click', serviceClickHandler);
  });

  function serviceClickHandler(ev) {
    if(ev.target.type !== 'button') {return}
    const defaultFiltr = document.querySelector("#filtr__all");

    if(ev.target.classList.contains("filtr_active")) {
      ev.target.classList.remove("filtr_active");
      defaultFiltr.classList.add("filtr_active");

      removeServiceContent();
      allFiltr(); //default filter in Service section
      return;
    }

    buttons.forEach(button => {
      button.classList.remove("filtr_active");

      if(button.classList === ev.target.classList) {
        button.classList.add("filtr_active");
      }
    });

  /**Activate API*/
    if(ev.target.id === "filtr__all") {
      removeServiceContent();
      allFiltr();
      return;
    }

    removeServiceContent();
    categoryFiltr(ev.target.id);
  }
}