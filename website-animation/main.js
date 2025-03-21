var tl=gsap.timeline();
tl.from([".navbar-brand","#navbarSupportedContent .nav-link"],{
    duration: 1,
    y:50,
    opacity:0,
    stagger:0.2
})


var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:".section-2",
        scroller:"body",
        markers:true,
        start:"top 50%",
        end:"top -40%",
        scrub:2,
        duration: 1,
    }
});
tl2.from(".section-2 .heading",{
    x:-30,
    opacity:0,
    duration: 0.5,
})

tl2.from(".section-2 .line-1 .left",{
    x:-300,
    opacity:0,
    duration:1,
},"anim1")
tl2.from(".section-2 .line-1 .right",{
    x:300,
    opacity:0,
    duration:1,
},"anim1")
tl2.from(".section-2 .line-2 .left",{
    x:-300,
    opacity:0,
    duration:1,
},"anim2")
tl2.from(".section-2 .line-2 .right",{
    x:300,
    opacity:0,
    duration:1,
},"anim2")
tl2.from(".section-2 .line-3 .left",{
    x:-300,
    opacity:0,
    duration:1,
},"anim3")
tl2.from(".section-2 .line-3 .right",{
    x:300,
    opacity:0,
    duration:1,
},"anim3")
tl2.from(".section-2 .line-4 .left",{
    x:-300,
    opacity:0,
    duration:1,
},"anim4")
tl2.from(".section-2 .line-4 .right",{
    x:300,
    opacity:0,
    duration:1,
},"anim4")