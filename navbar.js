const cursor = document.querySelector(".cursor");
const cursorTxt = document.querySelector(".cursor-text");
const title = document.querySelector(".title");
const backImg = document.querySelector(".back img");
const text = document.querySelector(".title-text");
const front = document.querySelector(".front img");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

window.addEventListener("mouseover", (e) => {
    console.log(e.target.classList);

    if (e.target.classList.contains("logo-link") || e.target.classList.contains("burger")) {
        cursor.classList.add("nav-active");
    } else {
        cursor.classList.remove("nav-active");   
    }
})

window.addEventListener('mousemove', (e) => {
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
})

let controller = new ScrollMagic.Controller();

const parallaxTl = gsap.timeline();

parallaxTl.to(text, 1, { y: "10%" });
parallaxTl.to(backImg, 1, { y: "15%" }, "-=1");

const scene = new ScrollMagic.Scene({
    triggerElement: title,
    duration: "100%",
    triggerHook: 0
})
    .setTween(parallaxTl)
    .addIndicators()
    .addTo(controller);