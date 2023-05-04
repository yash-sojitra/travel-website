
let control = new ScrollMagic.Controller();

//-----------------------tourist-spot--------------------------//

// gsap timeline on which things are animated
const touristTl = gsap.timeline();

// animations for particular elements selected by their classes
touristTl.to(".img1 img, .img3 img, .img5 img", 1, { y: "10%" });
touristTl.to(".img2 img, .img4 img", 1, { y: "-10%" }, "-=1");
touristTl.to(".location-view", 0.5, { y: "50%" }, "-=1");
touristTl.to(".tourist-spot", 1, { x: "100%", scale: "0", opacity: 0 });
touristTl.to(".location-view", 1, { y: "0%" }, "-=1");

// a scrollMagic scene creates a scrolling event scene for a particular timeline 
const touristScene = new ScrollMagic.Scene({
    triggerElement: ".tourist-spot",
    duration: "100%",
    triggerHook: 0
})
    .setTween(touristTl)
    .setPin(".tourist-spot", { pushFollowers: false })
    .addTo(control);

//-----------------------location-view--------------------------//

// another timeline for othe section
const locationTl = gsap.timeline();

//animations for other section
locationTl.fromTo(".pic1", 1, { x: "-15%" }, { x: "0%" });
locationTl.fromTo(".pic2 img", 1, { scale: "0.9", y: "10%" }, { scale: "1", y: "0%" }, "-=1");
locationTl.fromTo(".pic3", 1, { x: "15%" }, { x: "0%" }, "-=1");
locationTl.to(".hotels", 0.7, { y: "70%" }, "-=1");
locationTl.to(".location-view", 1, { x: "-100%", scale: "0", opacity: 0 });
locationTl.to(".hotels", 1, { y: "0%" }, "-=1");

//basically we need to create a diffrent scene for every timeline
const loactionScene = new ScrollMagic.Scene({
    triggerElement: ".location-view",
    duration: "100%",
    triggerHook: 0
})
    .setTween(locationTl)
    .setPin(".location-view", { pushFollowers: false })
    .addTo(control);


window.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("explore-btn")) {
        cursor.classList.add("exp-active");
        cursorTxt.innerText = "Tap";
    } else {
        cursor.classList.remove("exp-active");
        cursorTxt.innerText = "";
    }
})