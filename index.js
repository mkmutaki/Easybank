const openMenu = document.getElementById("open-button");
const closeMenu = document.getElementById("close-button");
const navbar = document.querySelector("nav");
const aboutNavbar = document.querySelector(".about-navi");
const aboutBtn = document.querySelector(".about-btn");
const buttonUp2 = document.querySelector("#Up2");
const buttonDown2 = document.querySelector("#Down2");

openMenu.addEventListener("click", function () {
  navbar.classList.toggle("open");
});

aboutBtn.addEventListener("click", function () {
  aboutNavbar.classList.toggle("hidden");
  buttonDown2.classList.toggle("hidden");
  buttonUp2.classList.toggle("hidden");
});
