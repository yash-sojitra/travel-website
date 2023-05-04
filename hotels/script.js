let introController = new ScrollMagic.Controller();

let introTl = new gsap.timeline();

introTl.fromTo(".intro-text", 1, { x: "-15%", opacity:"0" }, { x: "0%",opacity:"1" });
introTl.fromTo(".intro-img img", 1, { x: "15%", opacity:"0"  }, { x: "0%", opacity:"1" }, "-=1");


let introScene = new ScrollMagic.Scene({
    triggerElement: ".hotel-intro",
    triggerHook: 0.2,
    reverse: false
})
    .setTween(introTl)
    .addIndicators()
    .addTo(introController);
