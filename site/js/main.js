let slideIndex = 1;
//let slides = document.getElementsByClassName("mySlides");
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}

let imgIsBig = false;
let next = document.getElementsByClassName("next");
let prev = document.getElementsByClassName("prev");
let caption = document.getElementsByClassName("caption");
let numbertext = document.getElementsByClassName("numbertext");

function enlargeImg(id) {
  if (imgIsBig) {
      resetImg(id);
      imgIsBig = false;
      //console.log(numbertext);
      for (let element of numbertext) {
        element.style.display = "block"
      }
      for (let element of caption) {
        element.style.display = "block"
      }
      for (let element of prev) {
        element.style.display = "block"
      }
      for (let element of next) {
        element.style.display = "block"
      }
      
      // numbertext.style.display = "block";
      // next.style.display = "block";
      // prev.style.display = "block";
      // caption.style.display = "block";
  } else {
      img = document.getElementById(id);
      img.style.transform = "scale(2)";
      img.style.transition = "transform 0.25s ease";
      //img.style.marginTop = "5rem";
      imgIsBig = true;

      for (let element of numbertext) {
        element.style.display = "none"
      }
      for (let element of caption) {
        element.style.display = "none"
      }
      for (let element of prev) {
        element.style.display = "none"
      }
      for (let element of next) {
        element.style.display = "none"
      }

      // slides[slideIndex-1].style.transform = "scale(3)";
      // slides[slideIndex-1].style.transition = "transform 0.25s ease";
      // slides[slideIndex-1].style.marginTop = "5rem";
      // imgIsBig = true;
      // next.style.display = "none";
      // prev.style.display = "none";
      // caption.style.display = "none";

  }
  
}
function resetImg(id) {
  img = document.getElementById(id);
  img.style.transform = "scale(1)";
  img.style.transition = "transform 0.25s ease";
  //img.style.marginTop = "0rem";
  
  // img = document.getElementById(id);
  // slides[slideIndex-1].style.transform = "scale(1)";
  // slides[slideIndex-1].style.transition = "transform 0.25s ease";
  }