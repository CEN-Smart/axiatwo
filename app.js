"use strict";
let btnCta = document.querySelector(".btn__cta");
const modal = document.querySelector(".modal")
const btnMenu = document.querySelector(".menu__btn")

btnCta.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.remove("hidden")
})
btnMenu.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.toggle("hidden")
  
})
modal.addEventListener('click', () => {
  modal.classList.add("hidden")
})

document.addEventListener("keydown", (e)=>{
  if (e.key === "Escape") {
    modal.classList.add("hidden")
  }
})



