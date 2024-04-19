var tl = gsap.timeline();
var a =0;
var b = 0; // Define b globally
var c = 0; // Define c globally

function time() {
    setInterval(function() {
        a = Math.min(100, a + Math.floor(Math.random() * 20)); // Use Math.min to ensure a doesn't exceed 100
        b = Math.min(5, b + Math.floor(Math.random() * 2)); // Update b
        c = Math.min(5, c + Math.floor(Math.random() * 2)); // Update c
        
        document.querySelector(".clients .percent").innerHTML = a + "%";
        document.querySelector(".printing .printingValue").innerHTML = "+" + b;
        document.querySelector(".reviews .reviewsValue").innerHTML = c + ".0";
    }, 150);
}

// time(); // Call time function immediately
tl.from(".navbar",{
    y:-200,
    opacity:0,
    duration:1,
})
tl.from(".cloudCreationDiv",{
    rotateX:100,
    opacity:0,
    duration:1,
})
// Set up GSAP animation
tl.to(".clients .percent, .printing .printingValue, .reviews .reviewsValue", {
    delay: 0.5,
    duration: 1,
});

// Set up ScrollTrigger
gsap.to(".clients .percent, .printing .printingValue, .reviews .reviewsValue", {
    scrollTrigger: {
        trigger: ".clients",
        scroller: "body",
        scrub: true,
        start: "top 80%",
        end: "bottom 20%",
        // markers: true,
        onToggle: function(trigger) {
            if (trigger.isActive) {
                time();
            }
        }
    }
});

gsap.from(".printingServices .printingServicesinsideDiv",{
  x:1000,
    opacity:0,
    duration:1,
    stagger:0.8,
    scrollTrigger:{
        trigger : ".printingServices",
        scroller:"body",
        start: "top 80%",
    }
})

gsap.from(".discussProject .discussProjectInsideDiv",{
    x:-1000,
      duration:1,
      stagger:0.5,
      scrollTrigger:{
          trigger : ".discussProject .discussProjectInsideDiv",
          scroller:"body",
          start: "top 80%",
      }
  })
  