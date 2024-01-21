const header = document.querySelector("header");
const menuBtn = document.querySelector("#ham-menu");
const close = document.querySelector("#close");

menuBtn.addEventListener("click", () => {
  header.classList.toggle("show-mobile-menu");
});

//Event Listener Syntax
//addEventListener(type, listener)
//addEventListener(type, listener, options)
//addEventListener(type, listener, useCapture)
