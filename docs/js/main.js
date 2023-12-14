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
try{
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
}catch (e) {
  console.log(e);
}
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
  
  }

  // MARK TEXT
  document.addEventListener('click', function() {
    //console.log(new CopyPermission());
    if (CopyPermission.getPermission()) {
      let popup = document.getElementById('copy-popup');
    // Prüfen, ob Text ausgewählt ist
    let text = window.getSelection().toString();
    if (event.target == popup){
      popup.classList.remove("d-inline-flex");
      popup.classList.add("d-none");
    }else if (text) {
      navigator.clipboard.writeText(text)
        .then(() => {
          popup.classList.remove("d-none");
          popup.classList.add("d-inline-flex");
          //popup.textContent = "Text copied:" + text;
         
          popup.innerHTML = '<b style="color: #7E56C2; font-size: 22px;">Copied text:</b><br>';
          //popup.innerHTML += text.replace('. ', '.<br>'); ///\n/g
          popup.innerHTML += text.replace(/\. |\;|\n/g, function(match) {
            return match === '\n' ? '<br>' : '.<br>';
        });
          // popup.style.left = event.screenX + 'px';
          // popup.style.top = event.screenY + 'px';
          // ! Deprecated
          popup.style.left = event.clientX + 'px';
          popup.style.top = event.clientY + 'px';
          popup.style.display = 'inline-flex';
  
          // setTimeout(() => {
          //   popup.classList.remove("d-inline-flex");
          //   popup.classList.add("d-none");
          // }, 3000);
        })
        .catch(err => {
          console.error("Error copying the text: ", err);
        });
      }
    }
  });

  // document.addEventListener('mousemove', () => {
  //   let popup = document.getElementById('copy-popup');
  //     popup.style.left = (event.screenX + 5) + 'px';
  //     popup.style.top = (event.screenY + 5) + 'px';
  //     console.log(event.screenX + 'px');
  // });



setInterval(() => {
  try {
    let popup = document.getElementById('copy-popup');
  
    popup.classList.remove("d-inline-flex");
    popup.classList.add("d-none");
  } catch (e) {
    console.log(e);
  }
  
}, 5000);

// SIngleton checker if copy allowed
class CopyPermission {
  static permission;

  constructor() {
    console.log("CopyPermission constructor: " + this.permission );
    if (sessionStorage.getItem("copyPermission") === null) {
      sessionStorage.setItem("copyPermission", confirm("On this page marking text automatically copies it to your clipboard.\nDo you agree?"));    
    } 
    return sessionStorage.getItem("copyPermission") === "true";
    // if (this.permission === undefined || this.permission === null) {
    //   this.permission = confirm("On this page marking text automatically copies it to your clipboard.\nDo you agree?");
    // } 
    // return this.permission;
  }

  static getPermission(){
    if (sessionStorage.getItem("copyPermission") === null) {
      sessionStorage.setItem("copyPermission", confirm("On this page marking text automatically copies it to your clipboard.\nDo you agree?"));    
    } 
    return sessionStorage.getItem("copyPermission") === "true";
    // if (this.permission === undefined || this.permission === null) {
    //   return this.permission = confirm("On this page marking text automatically copies it to your clipboard.\nDo you agree?");
    // } else {
    //   return this.permission;
    // }
  }

}