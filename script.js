let bars = document.querySelector("#menu");
let header = document.querySelector(".header");
let links = document.querySelector(".navbar");
let show = document.querySelector(".show-more");


bars.addEventListener("click", () => {
  bars.classList.toggle("fa-times");
  header.classList.toggle("active");
});

window.addEventListener("onscroll", () => {
  bars.classList.remove("fa-times");
  header.classList.toggle("active");
});

links.addEventListener("click", ()=> {
  if (window.innerWidth <= 991 && bars){
    header.classList.remove('active')
    links.classList.toggle('active');
    bars.classList.toggle('fa-times');
  }
})

let current=3;
show.addEventListener("click", () =>{
  let boxes=[...document.querySelectorAll('.projects__container-box')];
  i=current;
  for ( i ; i < current +3 ; i++){
    boxes[i].style.display = 'block';
    console.log(i);
    console.log("current =" +current);
  }
  current += 3;
})

