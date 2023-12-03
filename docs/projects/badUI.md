<link rel="stylesheet" href="./projects.css">

<div class="card d-flex">
  <div class="f-row">
    <div class="f-column f-column-left">
    <!-- Slideshow container -->
      <div class="slideshow-container">
        <!-- Full-width images with number and caption text -->
        <div class="mySlides fade">
          <div class="numbertext">1 / 3</div>
          <img class="car-img" id="img1" src="../../img/badui/main.png" style="width:100%" width="400px" height="400px" onclick="enlargeImg('img1')">
          <div class="caption">Main Page - 2000th Browser Games Site</div>
        </div>
        <div class="mySlides fade">
          <div class="numbertext">2 / 3</div>
          <img class="car-img" id="img2" src="../../img/badui/login.png" style="width:100%" width="400px" height="400px" onclick="enlargeImg('img2')">
          <div class="caption">Tricky, unusual and unexplained login page</div>
        </div>
        <div class="mySlides fade">
          <div class="numbertext">3 / 3</div>
          <img class="car-img" id="img3" src="../../img/badui/game.png" style="width:100%" width="400px" height="400px" onclick="enlargeImg('img3')">
          <div class="caption">Dino game with unusual controls - animated and with gamesounds</div>
        </div>
        <!-- Next and previous buttons -->
      <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
      <a class="next" onclick="plusSlides(1)">&#10095;</a>
      </div>
      <br>
      <!-- The dots/circles -->
      <div style="text-align:center">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
      </div>
    </div>
    <div class="f-column f-column-right">
        <h3 id="desc-sub" class="subtitle">Description</h3>
    <p class="description">
      As one of our initial tasks at CODERS.BAY Vienna, we were tasked with creating a website in 2 weeks using HTML5, CSS3, and JavaScript, designed to make user interaction as challenging as possible. This project allowed us to freely explore working with vanilla JavaScript and express our creativity in a unique way.
    </p>
    </div>
  </div>
</div>

<hr style="margin-top: 0.5rem; margin-bottom: 0.5rem;" />

<div class="card d-flex">
  <div class=f-col>
    <div class="f-row">
        <h3 id="inst-sub" class="subtitle">Installation</h3>
    </div>
    <div class="f-row">
        <ol class="description">
            <li>Download or clone <a href="https://gitlab.com/andiblup/bad_ui">this repository</a></li>
            <ul>
                <li>If downloaded unzip the package</li>
            </ul>
            <li>Open the main folder and drag or open the main.html file with your browser</li>
            <li>Try to make it to the end where the credits are shown</li>
            <ul>
            <li><b>Tip:</b> The second page, the form, is very hard to beat. If you want to skip it you could continue with the login.html file in the login folder</li>
            </ul>
        </ol>
    </div>
  </div>
</div>

<hr style="margin-top: 0.5rem; margin-bottom: 0.5rem;" />

<!-- <div class="card d-flex">
  <div class=f-col>
    <div class="f-row">
        <h3 id="tech-sub" class="subtitle">Used Technologies</h3>
    </div>
    <div class="f-row-around">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="120px" height="120px"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="120px" height="120px"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="120px" height="120px"/>
    </div>
    <div id="down-sub" class="f-row">
        <h3 class="subtitle">Download</h3>
    </div>
    <div class="f-row-around">
        <a href="https://gitlab.com/andiblup/bad_ui"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" width="120px" height="120px"/></a>
        <a href="https://gitlab.com/andiblup/bad_ui"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="120px" height="120px"/></a>
    </div>
  </div>
</div>

<hr style="margin-top: 0.5rem; margin-bottom: 0.5rem;" /> -->

<div class="card d-flex">
  <div class=f-col>
    <div class="f-row">
        <h3 id="tech-sub" class="subtitle">Used Technologies</h3>
    </div>
    <div class="f-row-around">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="120px" height="120px"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="120px" height="120px"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="120px" height="120px"/>
    </div>
    
  </div>
</div>

<hr style="margin-top: 0.5rem; margin-bottom: 0.5rem;" />

<div class="card d-flex">
  <div class=f-col>
<div id="down-sub-2" class="f-row">
        <h3 id="down-sub-3" class="subtitle">Download</h3>
    </div>
    <div class="f-row-around">
        <a href="https://gitlab.com/andiblup/bad_ui"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" width="60px" height="60px"/></a>
        <a href="https://github.com/andiblup/Bad-UI-UX"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="60px" height="60px"/></a>
    </div>
</div>
</div>

<!-- <script>
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
        img.style.transform = "scale(2.5)";
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
</script> -->
