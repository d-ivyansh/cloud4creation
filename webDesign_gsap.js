var tl = gsap.timeline()


tl.from(".navbar",{
    y:-200,
    opacity:0,
    duration:1,
})

tl.from(".webDesign",{
    rotateY: 90,
    opacity:0,
    duration:2
})

gsap.from(".process",{
    opacity:0,
      duration:2,
      scrollTrigger:{
          trigger : ".process",
          scroller:"body",
          start: "top 60%",
      }
  })
  
  gsap.from(".projectsRecent div",{
    x:-1000,
    opacity:0,
    stagger:0.5,
      duration:1,
      scrollTrigger:{
          trigger : ".projectsRecent",
          scroller:"body",
          start: "top 80%",
      }
  })

  gsap.from(".featuresDiv div",{
    x:1000,
    opacity:0,
    stagger:0.5,
      duration:1,
      scrollTrigger:{
          trigger : ".featuresDiv div",
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
  