const openMenu = document.getElementById("open-button");
const closeMenu = document.getElementById("close-button");
const navbar = document.querySelector("nav");

openMenu.addEventListener("click", function () {
  navbar.classList.toggle("open");
});
