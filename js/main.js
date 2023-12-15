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
      sessionStorage.setItem("copyPermission", confirm("On this page marking text automatically copies it to your clipboard.\nYou can change this everytime in the settings.\nDo you agree?"));    
    } 
    return sessionStorage.getItem("copyPermission") === "true";
;
  }

  static getPermission(){
    if (sessionStorage.getItem("copyPermission") === null) {
      sessionStorage.setItem("copyPermission", confirm("On this page marking text automatically copies it to your clipboard.\nYou can change this everytime in the settings.\nDo you agree?"));    
    } 
    return sessionStorage.getItem("copyPermission") === "true";

  }

}


// TABLES

// Holen Sie sich alle 'thead'-Elemente
const theads = document.getElementsByTagName('thead');

// Fügen Sie jedem 'thead' einen Event-Listener hinzu
Array.from(theads).forEach(thead => {
  thead.addEventListener('click', function(event) {
    // Überprüfen, ob auf ein TH-Element geklickt wurde
    if (event.target.tagName === 'TH') {
      // Finden Sie das dazugehörige TBODY-Element und schalten Sie seine Sichtbarkeit um
      const tbody = this.closest('table').querySelector('tbody');
      tbody.style.display = tbody.style.display === 'none' ? '' : 'none';
    }
  });
});


// setInterval(() => {
//   Array.from(document.getElementsByClassName('md-tabs__link')).forEach(element => {
  
//     console.log("setting may found");
//     if (element.innerHTML === "Settings") {
//       console.log("setting found");
//       element.innerHTML = '<svg alt="Settings" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cog</title><path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" /></svg>';
//     }
//   });
// }, 100);
let linkElements = document.querySelectorAll('.md-tabs__link');

if (linkElements[3]) {
    linkElements[3].innerHTML = '<svg alt="Settings" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cog</title><path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" /></svg>';
} else {
    console.log('Element mit der Klasse md-tabs__link wurde nicht gefunden.');
}