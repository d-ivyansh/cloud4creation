var tl = gsap.timeline()


tl.from(".navbar",{
    y:-200,
    opacity:0,
    duration:1,
})

tl.from(".main_text div",{
    x:-200,
    opacity:0,
    stagger:1
})

tl.from(".viewfeaturesbtn",{
    x:-200,
    opacity:0,
})

gsap.from(".smarterSection .smarterSectionDiv .smarterSectionInsideDiv .box",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:0.8,
    scrollTrigger:{
        trigger : ".smarterSection",
        scroller:"body",
        start: "top 80%",
    }
})

gsap.from(".workwithUs .workwithUsInsideDiv",{
    scale:0,
    opacity:0,
    duration:0.5,
    stagger:0.5,
    scrollTrigger:{
        trigger : ".workwithUs",
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



