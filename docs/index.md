
<link rel="stylesheet" href="./projects.css">

<div id="copy-popup" class="hov-desc2 d-none" ></div>

# Welcome to my portfolio

## About Me

<!-- Roling face -->
<!-- <div class="card parent"><img class="moving-element" src="./img/self/cvFoto.png"  /></div> -->

<!-- style="display: flex; min-width: 100%; justify-content: center; " -->
<!-- height="200rem" width="200rem" -->



<div class="card d-flex p-bt-3">
  <div class="f-row">
    <div class="f-column f-column-left">
    <!-- Slideshow container -->
      <div class="slideshow-container">
        <!-- Full-width images with number and caption text -->
        <div class="mySlides fade">
          <div class="numbertext">1 / 3</div>
          <img class="car-img" id="img1" src="./img/self/cvFoto.png" style="width:100%" width="400px" height="400px" onclick="enlargeImg('img1')">
          <div class="caption">Me, myself and I</div>
        </div>
        <div class="mySlides fade">
          <div class="numbertext">2 / 3</div>
          <img class="car-img" id="img2" src="./img/self/cvFoto.png" style="width:100%" width="400px" height="400px" onclick="enlargeImg('img2')">
          <div class="caption">Me, myself and I</div>
        </div>
        <div class="mySlides fade">
          <div class="numbertext">3 / 3</div>
          <img class="car-img" id="img3" src="./img/self/cvFoto.png" style="width:100%" width="400px" height="400px" onclick="enlargeImg('img3')">
          <div class="caption">Me, myself and I</div>
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
        <h3 id="desc-sub" class="subtitle">About Me</h3>
    <p class="description">
      Hey, I’m Alfred Narjes, a part-time coffee addict and full-time passionate programmer.<br>
    I have always been fascinated by the newest technological achievements,<br>
    so one of my biggest dreams is to become a part of those.<br>
    I am not only a software maniac, I'm also an enthusiast when it comes to hardware. <br>
    </p>
    </div>
  </div>
</div>

<!-- 
<p style="margin-left: 2rem;">
    Hey, I’m Alfred Narjes, a part-time coffee addict and full-time passionate programmer.<br>
    I have always been fascinated by the newest technological achievements,<br>
    so one of my biggest dreams is to become a part of those.<br>
    I am not only a software maniac, I'm also an enthusiast when it comes to hardware. <br>
</p> -->


---
## Techstack

| Frontend                                                                                                                       |           | Self-Rating                      | Description                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------ | --------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="60%" height="60%" id="f1" onclick="enlargeImg('f1')"> | HTML 5    | :star: :star: :star: :star: | HTML5 is the latest version of the Hypertext Markup Language used for creating and structuring content on the web, offering enhanced multimedia and interactive capabilities.                                                                            |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="60%" height="60%" id="f2" onclick="enlargeImg('f2')"/>             | CSS 3     | :star: :star: :star: :star: | CSS3 is a stylesheet language used for enhancing the presentation and layout of HTML elements on web pages, providing advanced styling and design options.                                                                                               |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="60%" height="60%" id="f3" onclick="enlargeImg('f3')"/> | JavaScript        | :star: :star: :star: :star: | JavaScript is a versatile, high-level programming language used in web development to add interactivity, manipulate web page content, and create dynamic, client-side experiences.                                                                       |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" width="60%" height="60%" id="f4" onclick="enlargeImg('f4')"/>   | Bootstrap | :star: :star: :star:        | Bootstrap is a popular open-source front-end framework that simplifies and accelerates web development by providing pre-designed, responsive, and customizable components and styles for building modern, mobile-friendly websites and web applications. |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" width="60%" height="60%" id="f5" onclick="enlargeImg('f5')"/>             | SCSS      | :star: :star: :star: :star: | SCSS is a superset of CSS that enhances the capabilities of traditional CSS, offering features like variables, nesting, and mixins, making it more efficient and maintainable for styling web content.                                                   |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" width="60%" height="60%" id="f6" onclick="enlargeImg('f6')"/>           | Vue       | :star: :star: :star: :star: | Vue.js is a progressive JavaScript framework for building user interfaces, known for its simplicity and flexibility in creating interactive web applications.                                                                                            |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg" width="60%" height="60%" id="f7" onclick="enlargeImg('f7')" />       | Vuetify   | :star: :star: :star: :star: | Vuetify is a popular open-source Material Design component framework for Vue.js, offering pre-designed UI components and styles to streamline web application development with Vue.                                                                      |


<!-- </div> -->


| Backend                                                                                                                                                                           |             | Self-Rating                             | Description                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------ | ----------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" width="60%" height="60%" id="b1" onclick="enlargeImg('b1')" />               | PHP         | :star: :star: :star:               | PHP is a server-side scripting language widely used for web development to create dynamic web pages and interact with databases, known for its simplicity and versatility.                                                                                      |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg" width="60%" height="60%" id="b2" onclick="enlargeImg('b2')" /> | Laravel     | :star: :star: :star: :star:        | Laravel is a powerful, open-source PHP web application framework that simplifies and accelerates web development with features like elegant syntax, built-in tools, and a strong focus on developer-friendly practices.                                         |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" width="60%" height="60%" id="b3" onclick="enlargeImg('b3')" />             | Java        | :star: :star: :star: :star: :star: | Java is a versatile, high-level programming language known for its platform independence, used for developing a wide range of applications from web and mobile to desktop and server applications.                                                              |
| <img src="https://hibernate.org/images/hibernate-logo.svg"  width="60%" height="60%" id="b4" onclick="enlargeImg('b4')" />                                       | Hibernate   | :star: :star: :star: :star:        | Hibernate is an open-source Java framework that simplifies database interaction by providing an object-relational mapping (ORM) layer, allowing developers to work with databases using Java objects.                                                           |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" width="60%" height="60%" id="b5" onclick="enlargeImg('b5')" />         | Spring Boot | :star: :star: :star: :star: | Spring Boot is an open-source Java framework that simplifies and accelerates the development of production-ready, stand-alone, and microservices-based applications by providing a streamlined and opinionated approach to configuration and application setup. |

| Database                                                                                                                                |            | Self-Rating               | Description                                                                                                                                                                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------- | ---------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" width="60%" height="60%" id="db1" onclick="enlargeImg('db1')" />           | MySQL      | :star: :star: :star: | MySQL is an open-source relational database management system known for its speed, reliability, and ease of use, commonly used to store and manage structured data in various applications.                                          |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" width="60%" height="60%" id="db2" onclick="enlargeImg('db2')" /> | PostgreSQL | :star: :star: :star: | PostgreSQL is a powerful open-source relational database management system (RDBMS) known for its advanced features, extensibility, and strong support for SQL standards, making it a popular choice for data storage and management. |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" width="60%" height="60%" id="db3" onclick="enlargeImg('db3')" />                  | SQLite     | :star: :star: :star: | SQLite is a self-contained, serverless, and open-source relational database management system that is embedded within applications, ideal for lightweight, local data storage in various platforms and software.                     |
| <img src="https://www.h2database.com/html/images/h2-logo-2.png"  width="70%" height="60%" id="db4" onclick="enlargeImg('db4')" />                                           | H2         | :star: :star: :star: | H2 is a lightweight, open-source, and embeddable relational database management system written in Java, often used for in-memory and local data storage during development and testing.                                              |


<!-- #### Application -->
| Android                                                                                                                                                                                    |                 | Self-Rating                      | Description                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" width="60%" height="60%" id="a1" onclick="enlargeImg('a1')" />                                                                     | Kotlin          | :star: :star: :star: :star: | Kotlin is a modern, open-source, statically-typed programming language that's fully interoperable with Java, designed for concise, safe, and expressive code, widely used for Android app development and general-purpose programming. |
| <img src="https://4.bp.blogspot.com/-NnAkV5vpYuw/XNMYF4RtLvI/AAAAAAAAI70/kdgLm3cnTO4FB4rUC0v9smscN3zHJPlLgCLcBGAs/s1600/Jetpack_logo%2B%25282%2529.png" width="60%" height="60%" id="a2" onclick="enlargeImg('a2')" />      | Jetpack         | :star: :star: :star: :star: | Android Jetpack is a suite of libraries, tools, and guidance provided by Google to simplify and accelerate Android app development, offering components for common tasks, architecture, and user interface design.                     |
| <img src="https://3.bp.blogspot.com/-VVp3WvJvl84/X0Vu6EjYqDI/AAAAAAAAPjU/ZOMKiUlgfg8ok8DY8Hc-ocOvGdB0z86AgCLcBGAsYHQ/s1600/jetpack%2Bcompose%2Bicon_RGB.png" width="60%" height="60%" id="a3" onclick="enlargeImg('a3')" /> | Android Compose | :star: :star: :star: :star: | Android Compose is a modern, open-source toolkit for building native user interfaces in a declarative manner, simplifying Android app UI development with a more intuitive and efficient approach.                                     |

| Desktop                                                                                                                                               |         | Self-Rating                             | Description                                                                                                                                                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <img src="https://hub.jmonkeyengine.org/uploads/default/original/4X/c/f/3/cf37f1c07c6fb71ff72e1fc21173de73a507c62b.png"  width="60%" height="60%" id="d1" onclick="enlargeImg('d1')" /> | JMonkey | :star: :star: :star:               | JMonkeyEngine is an open-source Java-based 3D game engine and framework used for developing cross-platform 3D games and simulations.                                                       |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"width="60%" height="60%" id="d2" onclick="enlargeImg('d2')" />                                | Python  | :star: :star: :star: :star:        | Python is a versatile, high-level programming language known for its readability and simplicity, widely used for web development, data analysis, artificial intelligence, and more.        |
| <img src="https://www.pygame.org/docs/_static/pygame_tiny.png" width="80%" height="30%" id="d3" onclick="enlargeImg('d3')" />                                                          | Pygame  | :star: :star: :star: :star:        | Pygame is a popular open-source Python library used for game development and multimedia applications, providing tools and functionality for creating 2D games and interactive experiences. |
| <img src="https://storage.googleapis.com/replit/images/1619744706953_a11b5e0a6acf250ac95d9b46d5a2673f.jpeg"width="60%" height="60%" id="d4" onclick="enlargeImg('d4')" />             | Tkinter | :star: :star: :star: :star:        | Tkinter is a standard Python library used for creating graphical user interfaces (GUIs), offering a set of tools for building windows, dialog boxes, and interactive applications.         |
| <img src="https://cdn-icons-png.flaticon.com/128/8277/8277677.png"width="60%" height="60%" id="d5" onclick="enlargeImg('d5')" />                                                      | Turtle  | :star: :star: :star: :star: :star: | Turtle graphics is a beginner-friendly Python library that provides a simple way to create drawings and geometric shapes using a virtual "turtle" that can be controlled through commands. |


| Version Control                                                                                                        |        | Self-Rating                      | Description                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------- | ------ | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="60%" height="60%" id="v1" onclick="enlargeImg('v1')" />       | Git    | :star: :star: :star: :star: | Git is a distributed version control system used for tracking changes in source code, enabling collaboration among developers and efficient management of software projects.                                       |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="60%" height="60%" id="v2" onclick="enlargeImg('v2')" /> | GitHub | :star: :star: :star: :star: | GitHub is a web-based platform that provides hosting for version control repositories, facilitating collaborative software development by offering tools for code management, collaboration, and project tracking. |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" width="60%" height="60%" id="v3" onclick="enlargeImg('v3')" /> | GitLab | :star: :star: :star: :star: | GitLab is a web-based platform for managing and hosting Git repositories, offering a complete DevOps solution with integrated features for source code management, continuous integration, and collaboration.      |


| IDE                                                                                                                                  |                | Self-Rating                      | Description                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" width="60%" height="60%" id="i1" onclick="enlargeImg('i1')" />           | IntelliJ       | :star: :star: :star: :star: | IntelliJ IDEA is a popular integrated development environment that offers powerful tools and features for software development in various programming languages, known for its productivity and developer-friendly environment. |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" width="60%" height="60%" id="i2" onclick="enlargeImg('i2')" />               | VSCode         | :star: :star: :star: :star: | Visual Studio Code is a lightweight, open-source code editor developed by Microsoft, highly extensible and widely used by developers for various programming tasks and languages.                                               |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" width="60%" height="60%" id="i3" onclick="enlargeImg('i3')" /> | Android Studio | :star: :star: :star: :star: | Android Studio is the official integrated development environment for Android app development, featuring tools, emulators, and resources to create, test, and deploy Android applications.                                      |



| Package Manager:                                                                                                          |        | Self-Rating                      | Description                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------- | ------ | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" width="60%" height="60%" id="p1" onclick="enlargeImg('p1')" /> | npm    | :star: :star: :star:        | Node Package Manager is a widely used package manager for JavaScript that simplifies the process of installing, managing, and sharing libraries and tools for web development.                                      |
| <img src="https://www.svgrepo.com/show/354051/maven.svg"  width="60%" height="60%" id="p2" onclick="enlargeImg('p2')" />                                    | Maven  | :star: :star: :star: :star: | Maven is a widely used build automation and project management tool in the Java ecosystem, simplifying the build process and managing project dependencies.                                                         |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-plain.svg" width="60%" height="60%" id="p3" onclick="enlargeImg('p3')" />       | Gradle | :star: :star: :star: :star: | Gradle is a modern, open-source build automation system used for managing and building software projects, offering flexibility and performance improvements compared to traditional build tools like Ant and Maven. |

| Project Management                                                                                                           |         | Self-Rating                             | Description                                                                                                                                                                         |
| ---------------------------------------------------------------------------------------------------------------------------- | ------- | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original-wordmark.svg" width="60%" height="60%" id="pm1" onclick="enlargeImg('pm1')" />  | Jira    | :star: :star: :star: :star:        | Jira is a popular project management and issue tracking software by Atlassian, used for planning, tracking, and managing software development and other project tasks.              |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain-wordmark.svg" width="60%" height="60%" id="pm2" onclick="enlargeImg('pm2')" /> | Trello  | :star: :star: :star: :star:        | Trello is a web-based project management and collaboration tool that uses cards and boards to help teams organize and prioritize tasks and projects in a visually intuitive way.    |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" width="60%" height="60%" id="pm3" onclick="enlargeImg('pm3')" />         | Slack   | :star: :star: :star: :star:        | Slack is a popular collaboration platform that offers messaging, file sharing, and integration capabilities, providing teams with a centralized communication and productivity hub. |
| <img src="https://www.vectorlogo.zone/logos/discord/discord-tile.svg" width="60%" height="60%" id="pm4" onclick="enlargeImg('pm4')" />                          | Discord | :star: :star: :star: :star: :star: | Discord is a popular communication platform designed for text, voice, and video chats, commonly used by gamers but also for various online communities and collaboration.           |


| Prototyping                                                                                                          |       | Self-Rating               | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------- | ----- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" width="60%" height="60%" id="pr1" onclick="enlargeImg('pr1')" /> | Figma | :star: :star: :star: | Figma is a web-based design and prototyping tool that allows collaborative user interface and user experience design and real-time sharing among design teams. |


| Microcircuit:                                                                                                                    |              | Self-Rating               | Description                                                                                                                                 |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------ | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" width="60%" height="60%" id="m1" onclick="enlargeImg('m1')" /> | Raspberry Pi | :star: :star: :star: | Raspberry Pi is a credit card-sized, single-board computer that facilitates affordable, small-scale computing and DIY electronics projects. |


| Documentation & Presentation:                                                                                                                                                                                  |             | Self-Rating                      | Description                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" width="60%" height="60%" id="dp1" onclick="enlargeImg('dp1')" />                                                                                           | Canva       | :star: :star: :star:        | Canva is a user-friendly online graphic design and publishing tool that enables individuals and businesses to create a wide range of visual content, from social media graphics to marketing materials.                            |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" width="60%" height="60%" id="dp2" onclick="enlargeImg('dp2')" />                                                                                     | Markdown    | :star: :star: :star: :star: | Markdown is a lightweight markup language that allows users to format plain text documents using simple and easy-to-read syntax, commonly used for creating web content and documentation.                                         |
| <img src="https://www.vectorlogo.zone/logos/libreoffice/libreoffice-ar21.svg" width="80%" height="40%" id="dp3" onclick="enlargeImg('dp3')" />                                                                                                    | LibreOffice | :star: :star: :star:        | LibreOffice is a free and open-source office suite that provides a powerful and flexible alternative to commercial office software, offering applications for word processing, spreadsheets, presentations, and more.              |
| <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Microsoft_Office_2013-2019_logo_and_wordmark.svg/225px-Microsoft_Office_2013-2019_logo_and_wordmark.svg.png"  width="80%" height="40%" id="dp4" onclick="enlargeImg('dp4')" /> | MS Office   | :star: :star: :star: :star: | Microsoft Office is a suite of commercial productivity software that includes applications such as Word, Excel, PowerPoint, and Outlook, widely used for document creation, data analysis, presentations, and email communication. |


| AI Tools:                                                                                                                                              |            | Self-Rating                             | Description                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://deltl.de/wp-content/uploads/2023/01/Tome-Logo.png" width="40%" height="45%" id="ai1" onclick="enlargeImg('ai1')" />                                                     | Tome       | :star: :star: :star: :star:        | Tome is a presentation tool that utilizes artificial intelligence to assist users in creating professional presentations, offering features such as automatic presentation generation, AI-driven design, and collaboration.                                      |
| <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/768px-ChatGPT_logo.svg.png" width="70%" height="25%" id="ai2" onclick="enlargeImg('ai2')" />         | Chat GPT   | :star: :star: :star: :star:        | ChatGPT is a language model developed by OpenAI, designed for natural language understanding and generation, capable of answering questions and engaging in text-based conversations.                                                                            |
| <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Google_Bard_logo.svg/900px-Google_Bard_logo.svg.png"  width="40%" height="40%" id="ai3" onclick="enlargeImg('ai3')" /> | Bard       | :star: :star: :star: :star:        | Bard is a large language model from Google AI, trained on a massive dataset of text and code to generate text, translate languages, write different kinds of creative content, and answer your questions in an informative way.                                  |
| <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/Midjourney_Emblem_%E2%80%94_June.png?20230615005413" width="40%" height="40%" id="ai4" onclick="enlargeImg('ai4')" />       | Midjourney | :star: :star: :star: :star: :star: | Midjourney is a powerful generative AI tool that can create stunning and imaginative images from text descriptions. It is still under development, but it has already been used to create award-winning artwork, commercial designs, and even a children's book. |
| <img src="https://app.leonardo.ai/img/leonardo-logo.svg"  width="40%" height="40%" id="ai5" onclick="enlargeImg('ai5')" />                                                                 | Leonardo   | :star: :star: :star:               | Leonardo AI is a versatile AI tool based on Stable Diffusion that empowers users to unleash their creativity by rapidly geneSelf-Rating and editing high-quality images, 3D textures, and game assets.                                                                |
| <img src="https://avatars.githubusercontent.com/u/6810259?s=200&v=4" width="40%" height="40%" id="ai6" onclick="enlargeImg('ai6')" />                                                     | Tabnine    | :star: :star: :star: :star:        | Tabnine is an AI assistant for software developers that provides AI-powered code completions and suggestions to enhance productivity and accelerate coding workflows.                                                                                            |

| Other Tools:                                                                                                                           |                     | Self-Rating                             | Description                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <img src="https://www.svgrepo.com/show/354202/postman-icon.svg"  width="40%" height="40%" id="ot1" onclick="enlargeImg('ot1')" />                                          | Postman             | :star: :star: :star: :star:        | Postman is a popular API development and testing tool that simplifies the process of designing, testing, and documenting APIs, used by developers to streamline API-related tasks.                     |
| <img src="https://www.apachefriends.org/images/xampp-logo-ac950edf.svg"width="40%" height="40%" id="ot2" onclick="enlargeImg('ot2')" />                                  | XAMPP               | :star: :star: :star: :star:        | XAMPP is a free, open-source software package that provides a local development environment for web applications, bundling Apache, MySQL, PHP, and other tools for easy setup and testing.             |
| <img src="https://networkslearning.com/wp-content/uploads/2020/02/Screenshot-2020-02-15-at-15.54.25.png"width="40%" height="40%" id="ot3" onclick="enlargeImg('ot3')" /> | Cisco Packet Tracer | :star: :star: :star: :star:        | Cisco Packet Tracer is a network simulation tool that allows users to create and experiment with virtual networks, helping in the practice and understanding of networking concepts and Cisco devices. |
| <img src="https://www.svgrepo.com/show/331476/mapbox.svg" width="40%" height="40%" id="ot4" onclick="enlargeImg('ot4')" />                                                | Mapbox              | :star: :star: :star: :star: :star: | Mapbox is a proprietary geospatial platform that provides a suite of tools and services for creating and using maps, including vector tiles, navigation, search, and data visualization.               |

## Projects
---

### <a href="/portfolio/projects/rainbowSnake/">Rainbow Snake</a>:

<blockquote class="blockquote"><b>
<a>Python</a>, <a>Turtle</a></b></blockquote>
<blockquote class="blockquote"><b><a><span class="blockquote-at">@</span>VS Code</a></b></blockquote>

Embarking on my programming journey, Rainbow Snake stands out as a colorful testament to my early foray into the captivating world of coding. As I delved into the realms of Python, the vast landscape of libraries beckoned, and among them, Turtle emerged as my companion on this exhilaSelf-Rating voyage. Inspired by the timeless classic, Snake, I eagerly seized the opportunity to breathe new life into this iconic game.

Rainbow Snake was born not just as a replication but as a vibrant tapestry of innovation. The conventional boundaries of Snake were shattered as I infused a burst of colors into its pixelated existence. The serpentine avatar, once confined to monochrome pixels, now navigated a kaleidoscopic landscape, leaving trails of brilliance in its wake.

The development process became a symphony of code, color, and creativity. Each nibble of the rainbow-hued apples intensified the visual spectacle, transforming a simple gaming experience into a visually enchanting escapade. The dynamic hues seamlessly blended with the ever-growing serpent, creating a visual crescendo that mirrored my evolving programming prowess.

Navigating the challenges of programming, I not only conquered the intricacies of game logic but also honed my skills in handling user input, collision detection, and the overall architecture of a gaming environment. The project metamorphosed into a dynamic showcase of my newfound programming abilities, serving as a tangible testament to my journey from novice to enthusiast.

Rainbow Snake became more than a mere coding exercise; it became a reflection of my passion and determination to transform lines of code into interactive, visually captivating experiences. As the serpent slithered through the vibrant spectrum, I discovered the boundless possibilities that programming offered, igniting a spark that would fuel my ongoing exploration of the digital realm.

---

#### <a href="/portfolio/projects/pingPongGoneWrong">Ping-Pong-Gone_Wrong</a>:

<blockquote class="blockquote"><b>
<a>Python</a>, <a>Turtle</a></b></blockquote>
<blockquote class="blockquote"><b><a><span class="blockquote-at">@</span>VS Code</a></b></blockquote>

My second project was going to be another classic game, but this time one that could be played by two people. The choice was definitely Pong. It was also the first time I realized how crucial the choice of technology could be for the course of a project. Most of these obstacles were overcome by turning a few critical bugs into features.

---

#### <a href="/portfolio/projects/csvManipulation">Python Script for a csv formation</a>:

<blockquote class="blockquote"><b>
<a>Python</a></b></blockquote>
<blockquote class="blockquote"><b><a><span class="blockquote-at">@</span>VS Code</a></b></blockquote>

A script I wrote for a friend for CSV manipulation. It splits the data received from the server, initially separated by commas within a single column, into separate columns for easier editing in Excel. Additionally, there is a script to reformat these divided data back into a single column.

---

#### <a href="/portfolio/projects/badUI">Bad UI/UX:</a>

<blockquote class="blockquote"><b>
<a>HTML</a>, <a>CSS</a>, <a>JavaScript</a></b></blockquote>
<blockquote class="blockquote"><b><a><span class="blockquote-at">@</span>VS Code</a></b></blockquote>

As one of our initial tasks at CODERS.BAY Vienna, we were tasked with creating a website in 2 weeks using HTML5, CSS3, and JavaScript, designed to make user interaction as challenging as possible. This project allowed us to freely explore working with vanilla JavaScript and express our creativity in a unique way.

---

#### <a href="/portfolio/projects/vuecipes">Vuecipes</a>:

<blockquote class="blockquote"><b>
<a>HTML</a>, <a>SCSS</a>, <a>JavaScript</a>, <a>Vue3</a>, <a>Vuetify</a>, <a>npm</a></b></blockquote>
<blockquote class="blockquote"><b><a><span class="blockquote-at">@</span>VS Code</a></b></blockquote>

For our first practical project with VUE.js 3, we were provided with a backend. This gave us the necessary technical resources to create a recipe web app. As our initial project with VUE.js 3, the primary goal was to independently dive into the Single Page Application framework and its documentation, going beyond the basics.

---

#### <a href="/portfolio/projects/planellos">Planellos</a>:

<blockquote class="blockquote"><b>
<a>HTML</a>, <a>SCSS</a>, <a>JavaScript</a>, <a>Vue3</a>, <a>Vuetify</a>, <a>npm</a></b></blockquote>
<blockquote class="blockquote"><b><a><span class="blockquote-at">@</span>VS Code</a></b></blockquote>

For our 4-week final project in Web Frontend, I built a Trello replica. Similar to the previous project, we were provided with a backend, and the primary requirement was to use VUE.js 3. In this project, I focused extensively on UI and translating designs into reality.

---

#### <a href="/portfolio/projects/fantasyQuest/">FantasyQuest: Worldwalker Battles</a>:


<blockquote class="blockquote"><span class="bold c-teal">Android Application</span><b><span class="bold c-custom-purple">:</span> <a>Kotlin</a>, <a>Android Jetpack</a> & <a>Compose</a><a><span class="blockquote-at"> @</span>Android Studio</a></b></blockquote>

<blockquote class="blockquote"><span class="bold c-teal">Backend</span><b><span class="bold c-custom-purple">:</span> <a>Java</a>, <a>Spring Boot</a><a><span class="blockquote-at"> @</span>Intellij Cummunity</a></b></blockquote>

<blockquote class="blockquote"><span class="bold c-teal">Maps Service</span><b><span class="bold c-custom-purple">:</span> <a>Mapbox</a> resp. <a>OpenStreetMap</a></b></blockquote>

<blockquote class="blockquote"><span class="bold c-teal">Hosting</span><b><span class="bold c-custom-purple">:</span> Current: <a>XAMPP</a> Planned: <a>Firebase </a></b></blockquote>

<blockquote class="blockquote"><span class="bold c-teal">Config</span><b><span class="bold c-custom-purple">:</span> <a>Gradle</a> <a>Maven</a></b></blockquote>

<blockquote class="blockquote"><span class="bold c-teal">Projectmanagement</span><b><span class="bold c-custom-purple"><span class="bold c-custom-purple">:</span></span> <a>Jira</a></b></blockquote>




As part of our final project in Android, Kotlin, we were tasked with creating an Android app that didn't exist in that form before. I chose to combine this project with our final project in Java Spring Boot. The idea behind the app was to create a combination of Pokémon Go, the original Pokémon games, and Final Fantasy 1, which was a challenging endeavor to accomplish in less than 5 weeks. Time and resource management played a crucial role, as did clear prioritization and agile work. To make the app achievable within 5 weeks, I had to omit features related to multiplayer, among other things. I also had to familiarize myself with tools like Mapbox and Android, as I had no prior experience with either.

Working with location data for the first time was the most challenging aspect for me. However, I am very pleased and proud of this project and its provisional completion, especially since it turned into an emotional journey and involved a lot of stress.

---

#### <a href="/portfolio/projects/coderscape/">Coderscape</a>:

<blockquote class="blockquote"><b><a>Java</a>, <a>JMonkeyEngine</a>, <a>Gradle</a>, <a>Maven</a></b></blockquote>
<blockquote class="blockquote"><b><a><span class="blockquote-at">@</span>Intellij Community</a>, <a>JMonkeyEngineSDK</a></b></blockquote>

Working together as a group of seven individuals, we are developing a 3D or puzzle-platformer 2-player co-op game. The Players must use their surroundings or abilities to navigate through levels and platforms to reach the goal. The objective is to capture a mobile cannon that continually moves to the next level, gradually unveiling more of the story behind why we are pursuing it and why the little 'Tourette' is running away. We are programming the entire project using the JMonkeyEngine and IntelliJ Community Edition, following agile development methodologies.



---

#### <a href="/portfolio/projects/veggieWedges/">VeggieWedges</a>:

<blockquote class="blockquote"><b><a>HTML</a>, <a>SCSS</a>, <a>Bootstrap</a>, <a>JavaScript</a>, <a>PHP</a>, <a>Laravel</a></b></blockquote>
<blockquote class="blockquote"><b><a><span class="blockquote-at">@</span>VS Code</a></b></blockquote>


Users can safely register and log in to easily browse and select products. The user-friendly interface provides detailed product information and allows for easy adding of items to the cart, along with convenient price calculation. The powerful backend records and processes orders, automatically sends confirmation emails, and stores order details for later tracking. Administrators can manage products, orders, and user accounts through a separate management interface. The platform ensures security against attacks like XSS and SQL injections and offers a scalable solution to handle increased traffic and user numbers. The user-friendly, responsive interface ensures an optimal user experience on various devices.


---

#### <a href="/portfolio/projects/portfolio">Portfolio Page</a>:

<blockquote class="blockquote"><b><a>Markdown</a>, <a>MKDocs</a>, <a>Python</a>, <a>HTML</a>, <a>CSS</a>, <a>JavaScript</a></b></blockquote>
<blockquote class="blockquote"><b><a><span class="blockquote-at">@</span>VS Code</a></b></blockquote>


I created my portfolio using MKDocs, a powerful tool that utilizes Markdown for content creation. The choice of MKDocs, coupled with the MKDocs-Material theme, was driven by several key reasons.<br>
Firstly, Markdown provided a straightforward and efficient way to structure and format my content. This simplicity allowed me to focus on the portfolio's content itself rather than getting bogged down in complex HTML and CSS coding.<br>
Secondly, MKDocs offered the advantage of being built with Python, which not only made it easy to set up and customize but also provided ample opportunities for extending its functionality with Python scripts.
The use of the MKDocs-Material theme added a modern, visually appealing design to my portfolio with minimal effort. It offered built-in features like responsive design and navigation, making the portfolio accessible and aesthetically pleasing on various devices.<br>
Additionally, HTML, CSS, and JavaScript were employed when necessary to enhance specific sections of the portfolio, adding interactive elements and custom styling.




<!-- <script src="../docs/js/main.js"></script> -->