

let touristController = new ScrollMagic.Controller();
  //Select some things
  const sliders = document.querySelectorAll(".slide");
  const nav = document.querySelector(".nav-header");
  //Loop over each sllide
  sliders.forEach((slide, index, slides) => {
    const revealImg = slide.querySelector(".reveal-img");
    const img = slide.querySelector("img");
    const revealText = slide.querySelector(".reveal-txt");
    //GSAP
    const slideTl = gsap.timeline({
      defaults: { duration: 1, ease: "power2.inOut" }
    });
    slideTl.fromTo(revealImg, { x: "0%" }, { x: "100%" });
    slideTl.fromTo(img, { scale: 2 }, { scale: 1 }, "-=1");
    slideTl.fromTo(revealText, { x: "0%" }, { x: "100%" }, "-=0.75");
    //Create Scene
    slideScene = new ScrollMagic.Scene({
      triggerElement: slide,
      triggerHook: 0.25,
      reverse: false
    })
      .setTween(slideTl)
      .addTo(touristController);
    //New ANimation
    const pageTl = gsap.timeline();
    let nextSlide = slides.length - 1 === index ? "end" : slides[index + 1];
    pageTl.fromTo(nextSlide, { y: "0%" }, { y: "50%" });
    pageTl.fromTo(slide, { opacity: 1, scale: 1 }, { opacity: 0, scale: 0.5 });
    pageTl.fromTo(nextSlide, { y: "50%" }, { y: "0%" }, "-=0.5");
    //Create new scene
    pageScene = new ScrollMagic.Scene({
      triggerElement: slide,
      duration: "100%",
      triggerHook: 0
    })
      // .addIndicators({
      //   colorStart: "white",
      //   colorTrigger: "white",
      //   name: "page",
      //   indent: 200
      // })
      .setPin(slide, { pushFollowers: false })
      .setTween(pageTl)
      .addTo(touristController);
  });