var tl = gsap.timeline()



tl.from(".navbar",{
    y:-200,
    opacity:0,
    duration:1,
})

gsap.from(".formDiv",{
   x:-500,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger : ".formDiv",
        scroller:"body",
        start: "top 60%",
    }
})
gsap.from(".contactDiv",{
    x:500,
     opacity:0,
     duration:1,
     scrollTrigger:{
         trigger : ".contactDiv",
         scroller:"body",
         start: "top 60%",
     }
 })