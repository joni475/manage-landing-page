//mobile nav
const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".nav-link");
const overlay = document.querySelector(".overlay");
const hamOne = document.querySelector(".ham-one");
const hamTwo = document.querySelector(".ham-two");
const hamThree = document.querySelector(".ham-three");

hamburger.addEventListener("click",()=>{ 
   navLink.classList.toggle("show");
   overlay.classList.toggle("show");
   hamOne.classList.toggle("show");
   hamTwo.classList.toggle("show");
   hamThree.classList.toggle("show");
});




   let slideIndex = 0;

function size() {
    if(window.innerWidth <= 768){
        var i;
  let slides = document.getElementsByClassName("testi-container");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(size, 10000);  
    }
}

 window.onresize = size();


let resizeTimeout;
window.addEventListener('resize', function(event) {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(function(){
    window.location.reload();
  }, 100);
});