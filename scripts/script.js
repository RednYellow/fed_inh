var nav = document.querySelector("nav");
var div = document.querySelector("nav div");

div.addEventListener("click", () => {
  nav.classList.toggle("active");
});