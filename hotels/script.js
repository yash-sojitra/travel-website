let introController = new ScrollMagic.Controller();

let introTl = new gsap.timeline();

introTl.fromTo(".intro-text", 1 , {x : "-15%"},{x : "0%"});
introTl.fromTo(".intro-img img", 1 , {x : "15%"},{x : "0%"},"-=1");
introTl.fromTo(".intro-img img", 1 , {x : "15%"},{x : "0%"},"-=1");


let introScene = new ScrollMagic.Scene({
    triggerElement : ".front",
    triggerHook:1
})
.setTween(introTl)
.addIndicators()
.setPin("hotel-intro")
.addTo(introController);
