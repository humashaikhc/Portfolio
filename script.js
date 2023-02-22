let bars = document.querySelector("#menu");
let header = document.querySelector(".header");
let links = document.querySelector(".navbar");

bars.addEventListener("click", () => {
  bars.classList.toggle("fa-times");
  header.classList.toggle("active");
});

window.addEventListener("onscroll", () => {
  bars.classList.remove("fa-times");
  header.classList.toggle("active");
});

links.addEventListener("click", ()=> {
  if (window.innerWidth <= 768 && bars){
    header.classList.remove('active')
    links.classList.toggle('active');
  }
})

