var nav = document.querySelector("nav");
var div = document.querySelector("nav div");

div.addEventListener("click", () => {
  nav.classList.toggle("active");
});

var button = document.getElementById("top-page");
var footer = document.querySelector("footer");
var main = document.querySelector("main");
var header = document.querySelector("header");

button.addEventListener("click", function(){
  
  footer.classList.toggle("lightswitch");
  main.classList.toggle("lightswitch");
  header.classList.toggle("lightswitch");


});