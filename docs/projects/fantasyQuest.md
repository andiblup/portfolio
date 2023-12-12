<link rel="stylesheet" href="./projects.css">

<div style="color: red; font-size: 10rem;">Work<br>in<br>progress</div>
<div style="color: green; font-size: 5rem;">Github/Gitlab and Techstack is correct</div>
<div class="card d-flex">
  <div class="f-row">
    <div class="f-column f-column-left">
    <!-- Slideshow container -->
      <div class="slideshow-container">
        <!-- Full-width images with number and caption text -->
        <div class="mySlides fade">
          <div class="numbertext">1 / 9</div>
          <img class="car-img" id="img1" src="../../img/planellos/landing.png" style="width:100%" width="400px" height="400px" onclick="enlargeImg('img1')">
          <div class="caption">The landing page where the user can either login or register</div>
        </div>
        <div class="mySlides fade">
          <div class="numbertext">2 / 9</div>
          <img class="car-img" id="img2" src="../../img/planellos/register.png" style="width:100%" width="400px" height="400px" onclick="enlargeImg('img2')">
          <div class="caption">This is the register form</div>
        </div>
        <div class="mySlides fade">
          <div class="numbertext">3 / 9</div>
          <img class="car-img" id="img3" src="../../img/planellos/login.png" style="width:100%" width="400px" height="400px" onclick="enlargeImg('img3')">
          <div class="caption">In this form the user can login to his/her account</div>
        </div>
        <div class="mySlides fade">
          <div class="numbertext">4 / 9</div>
          <img class="car-img" id="img4" src="../../img/planellos/home.png" style="width:100%" width="400px" height="400px" onclick="enlargeImg('img4')">
          <div class="caption">This is the homepage the gets directed to</div>
        </div>
        <div class="mySlides fade">
          <div class="numbertext">5 / 9</div>
          <img class="car-img" id="img5" src="../../img/planellos/sidebar.png" style="width:100%" width="400px" height="400px" onclick="enlargeImg('img5')">
          <div class="caption">
            If you hover on the left side a sidebar will appear<br>
            on the side bar you can edit your profile, get a quick overview<br>and add tasklists or users.
          </div>
        </div>
        <div class="mySlides fade">
          <div class="numbertext">6 / 9</div>
          <img class="car-img" id="img6" src="../../img/planellos/addUser.png" style="width:100%" width="400px" height="400px" onclick="enlargeImg('img6')">
          <div class="caption">If you want to add a user to your tasklists you just have to click in the sidebar<br>onto the "Teilnehmer hinzufügen" or the plus icon on top of the userlist.<br>Then just type in the username.</div>
        </div>
        <div class="mySlides fade">
          <div class="numbertext">7 / 9</div>
          <img class="car-img" id="img7" src="../../img/planellos/addNewNote.png" style="width:100%" width="400px" height="400px" onclick="enlargeImg('img7')">
          <div class="caption">
            Onklick at the plus icon at the bottom of each tasklist you can add a new task to it.
          </div>
        </div>
        <div class="mySlides fade">
          <div class="numbertext">8 / 9</div>
          <img class="car-img" id="img8" src="../../img/planellos/notes.png" style="width:100%" width="400px" height="400px" onclick="enlargeImg('img8')">
          <div class="caption">
          After adding a new note you will only see the description.<br>
          You can expand the note, see the content and be able to delete and maintain the single note.
          </div>
        </div>
        <div class="mySlides fade">
          <div class="numbertext">9 / 9</div>
          <img class="car-img" id="img9" src="../../img/planellos/maintain.png" style="width:100%" width="400px" height="400px" onclick="enlargeImg('img9')">
          <div class="caption">If you decide to update your note you can update every note by itself and/or the tasklists title and description</div>
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
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
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
            <li>Download or clone <a href="https://github.com/andiblup/ping_pong_gone_wrong">this repository</a></li>
            <ul>
                <li>If downloaded unzip the package</li>
            </ul>
            <li> <b>IMPORTANT!!</b><br>Make sure you have downloaded and installed at least Node version 16.15.
            <br> If needed you can download node <a href="https://nodejs.org/en/download/current">here</a>
            </li>
            <li>Within the terminal navigate to the source folder called "VuetifyProject"<br>
            <ul><li><b>Note </b> that you may now have to run
            </li></ul>
            ```shell
            npm install
            ```
            or
            ```shell
            npm i
            ```
            </li>
            <li>In the source folder now run:
              ```shell
              npm run dev
              ```
              to start hosting the frontend, the standard address is:
              <!-- <blockquote style="border-left-color: #7E56C2; color: teal;" id="inst-sub-sub" class="subtitle">127.0.0.1:3000</blockquote> -->

              ```php
              127.0.0.1:3000
              ```
            </li>
        </ol>
    </div>
  </div>
</div>

<hr style="margin-top: 0.5rem; margin-bottom: 0.5rem;" />


<div class="card d-flex">
  <div class=f-col>
    <div class="f-row">
        <h3 id="tech-sub" class="subtitle">Used Technologies</h3>
    </div>
    <div class="f-column f-column-start-space">
      <div class="f-row m-t-4">
        <b id="tech-sub" class="subtitle subtitle-multi f-self-start ">Android Application:</b>
        <span alt="Kotlin" class="hov-desc"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" width="120px" height="120px"/>
        </span>
        <span alt="Android Jetpack" class="hov-desc"><img src="https://user-content.gitlab-static.net/f93649f4351d3f4587c0ffe1db049137b27f13ba/68747470733a2f2f342e62702e626c6f6773706f742e636f6d2f2d4e6e416b563576705975772f584e4d59463452744c76492f41414141414141414937302f6b64674c6d33636e544f34464234725543307639736d73634e337a484a506c4c67434c63424741732f73313630302f4a65747061636b5f6c6f676f25324225323532383225323532392e706e67" width="120px" height="120px"/>
        </span>
        <span alt="Android Compose" class="hov-desc"><img src="https://user-content.gitlab-static.net/51fdfe31ea1288a0b8a6fc6591dd57273c7b026d/68747470733a2f2f332e62702e626c6f6773706f742e636f6d2f2d5656703357764a766c38342f5830567536456a597144492f4141414141414141506a552f5a4f4d4b69556c676667386f6b3844593848632d6f634f76476442307a38364167434c63424741735948512f73313630302f6a65747061636b253242636f6d706f736525324269636f6e5f5247422e706e67" width="120px" height="120px"/>
        </span>
        <span alt="Android Studio" class="hov-desc"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" width="120px" height="120px"/>
        </span>
      </div>
      <div class="f-row m-t-4">
        <b id="tech-sub" class="subtitle subtitle-multi f-self-start ">Backend:</b>
        <span alt="Java" class="hov-desc"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" width="120px" height="120px"/>
        </span>
        <span alt="Spring Boot" class="hov-desc"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" width="120px" height="120px"/>
        </span>
        <span alt="Intellij Community" class="hov-desc"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" width="120px" height="120px"/>
        </span>
      </div>
      <div class="f-row m-t-4">
        <b id="tech-sub" class="subtitle subtitle-multi f-self-start ">Maps Service:</b>
        <span alt="Mapbox" class="hov-desc"><img src="https://user-content.gitlab-static.net/47d151ad324455c46742c2500ce144bb7a89c499/68747470733a2f2f7777772e7376677265706f2e636f6d2f73686f772f3333313437362f6d6170626f782e737667" width="120px" height="120px"/>
        </span>
      </div>
      <div class="f-row m-t-4">
        <b id="tech-sub" class="subtitle subtitle-multi f-self-start ">Hosting:</b>
        <span alt="XAMPP" class="hov-desc"><img src="https://user-content.gitlab-static.net/5fc743e8f3c389211a06b0180cee1fe09fb9bda1/68747470733a2f2f7777772e617061636865667269656e64732e6f72672f696d616765732f78616d70702d6c6f676f2d61633935306564662e737667" width="120px" height="120px"/>
        </span>
      </div>
      <div class="f-row m-t-4">
        <b id="tech-sub" class="subtitle subtitle-multi f-self-start ">Configuration, Dependencies:</b>
        <span alt="Gradle" class="hov-desc"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-plain.svg" width="120px" height="120px"/>
        </span>
        <span alt="Maven" class="hov-desc"><img src="https://user-content.gitlab-static.net/27fd052ee3929d0739d0708a90cc148063cbf4e4/68747470733a2f2f7777772e7376677265706f2e636f6d2f73686f772f3335343035312f6d6176656e2e737667" width="120px" height="120px"/>
        </span>
      </div>
      <div class="f-row m-t-4">
        <b id="tech-sub" class="subtitle subtitle-multi f-self-start ">Projectmanagement:</b>
        <span alt="Jira" class="hov-desc"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" width="120px" height="120px"/>
        </span>
      </div>
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
          <a alt="Gitlab" class="hov-desc" href="https://gitlab.com/andiblup/fantasyquest">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" alt="Gitlab" width="60px" height="60px"/>
          </a>
    </div>
</div>
</div>

