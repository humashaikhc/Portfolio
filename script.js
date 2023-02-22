let bars = document.querySelector("#menu");
let header = document.querySelector(".header");

bars.addEventListener("click", () => {
  bars.classList.toggle("fa-times");
  header.classList.toggle("active");
});

window.addEventListener("onscroll", () => {
  bars.classList.remove("fa-times");
  header.classList.toggle("active");
});

