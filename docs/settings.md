
<link rel="stylesheet" href="./projects.css">

<div id="copy-popup" class="hov-desc2 d-none" ></div>
## Auto copy

<div class="d-flex">
<i class="mdi mdi-toggle-switch"></i>
<svg id="copy-toggle-on" style="width: 180px; height: 100px;" class="d-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>toggle-switch</title><path d="M17,7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7M17,15A3,3 0 0,1 14,12A3,3 0 0,1 17,9A3,3 0 0,1 20,12A3,3 0 0,1 17,15Z" /></svg>
<svg id="copy-toggle-off" style="width: 180px; height: 100px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>toggle-switch-off-outline</title><path d="M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zM7 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" /></svg>
</div>

<script>
    const toggleOn = document.getElementById("copy-toggle-on");
    const toggleOff = document.getElementById("copy-toggle-off");
    if (sessionStorage.getItem("copyPermission") === "true"){
        toggleOn.classList.remove("d-none");
        toggleOff.classList.add("d-none");
    } else {
        toggleOff.classList.remove("d-none");
        toggleOn.classList.add("d-none");
    }
    toggleOn.addEventListener('click', (e) => {
        toggleOff.classList.remove("d-none");
        toggleOn.classList.add("d-none");
        sessionStorage.setItem("copyPermission", "false")
    });
    toggleOff.addEventListener('click', (e) => {
        toggleOn.classList.remove("d-none");
        toggleOff.classList.add("d-none");
        sessionStorage.setItem("copyPermission", "true");
    })
</script>

<!-- <script>
    const toggle = document.getElementById("copy-toggle");
    if (sessionStorage.getItem("copyPermission") === "true"){
        toggle.classList.remove("fa-toggle-off");
        toggle.classList.add("fa-toggle-on");
    } else {
        toggle.classList.remove("fa-toggle-on");
        toggle.classList.add("fa-toggle-off");
    }
    toggle.addEventListener('click', (e) => {
        if (sessionStorage.getItem("copyPermission") === "true"){
            toggle.classList.remove("fa-toggle-on");
            toggle.classList.add("fa-toggle-off");
            sessionStorage.setItem("copyPermission") === "false"
        } else {
            toggle.classList.remove("fa-toggle-off");
            toggle.classList.add("fa-toggle-on");
            sessionStorage.setItem("copyPermission") === "true"
        }
    })
</script> -->