const images = document.querySelectorAll(".grid-items")

let imageController = new ScrollMagic.Controller();

images.forEach((image, index) => {

    const imageTl = gsap.timeline({
        defaults: { duration: 0.5, ease: "power2.inOut" }
      });

      imageTl.fromTo(image, { y: "20px" }, { y: "0px" });
    

      let imageScene = new ScrollMagic.Scene({
        triggerElement: image,
        triggerHook: 0.75,
      })
        .setTween(imageTl)
        .addTo(imageController);
});