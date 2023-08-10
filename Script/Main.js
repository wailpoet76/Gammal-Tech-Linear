var vid = document.getElementById("myvideo");
vid.autoplay = true;
vid.muted = true;
vid.addEventListener('ended', function () {
    vid.currentTime = 0;
    vid.play();
});

function myIntro() {
    window.open("index.html", "_self");
}

function Signin() {
    window.open("https://www.gammal.tech/sign-in", "_self");
}

function Signup() {
    window.open("https://www.gammal.tech/sign-in", "_self");
}

function Course() {
    window.open("https://www.gammal.tech/courses", "_self");
}

function Master() {
    window.open("https://www.gammal.tech/masterclass-intro", "_self");
}

function Subs() {
    window.open("https://www.gammal.tech/premium", "_self");
}


function About() {
    window.open("https://www.gammal.tech/about", "_self");
}

function Help() {
    window.open("https://www.gammal.tech/faq", "_self");
}

function Media() {
    window.open("https://www.gammal.tech/media", "_self");
}

function Youtube() {
    window.open("https://www.youtube.com/gammaltech");
}

function Foot2() {
    window.open("https://www.gammal.tech/drafted/superuser");
}

function whats() {
    window.open("https://wa.me/+201033998844");
}
