const cursor = document.querySelector(".cursor");
const cursorTxt = document.querySelector(".cursor-text");
const title = document.querySelector(".title");
const backImg = document.querySelector(".back img");
const text = document.querySelector(".title-text");
const front = document.querySelector(".front img");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const burger = document.querySelector(".burger");

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



burger.addEventListener("click", (e) => {
    if (!e.target.classList.contains("active")) {
        e.target.classList.add("active");
        gsap.to(".line1", 0.5, { rotate: "45", y: 6, background: "black" });
        gsap.to(".line2", 0.5, { rotate: "-45", y: -6, background: "black" });
        gsap.to(".logo-link", 1, { color: "black" });
        gsap.to(".nav-bar", 1, { clipPath: "circle(2500px at 100% -10%)" });
        gsap.to(".cursor", 1, { borderColor: "black" });
        document.body.classList.add("hide");
    } else {
        e.target.classList.remove("active");
        gsap.to(".line1", 0.5, { rotate: "0", y: 0, background: "white" });
        gsap.to(".line2", 0.5, { rotate: "0", y: 0, background: "white" });
        gsap.to(".logo-link", 1, { color: "white" });
        gsap.to(".nav-bar", 1, { clipPath: "circle(50px at 100% -10%)" });
        gsap.to(".cursor", 1, { borderColor: "white" });
        document.body.classList.remove("hide");
      }
})