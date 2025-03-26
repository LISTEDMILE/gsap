

var tl = gsap.timeline();
tl.from("nav h1, nav h4, nav button", {
    y: -60,
    duration: 0.6,
    delay: 1,
    stagger: 0.1,
    
})

tl.from(".center-part1 h1, .center-part1 p, .center-part1 button", {
    x: -100,
    opacity: 0,
    duration: 0.4,
    stagger:0.1
})

// object ke bad , lgake -=time matlab ab pichla animation poora hone se 1 sec se pehle...
tl.from(".center-part2 img", {
    opacity: 0
}, "-=1");

tl.from(".bottom i", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.6
});

// we can also trigger timeline as below....

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".body2",
        start: "top 70%",
        scrub: 2,
        scroller:"body",
        end: "top 40",
        markers:"true"
}});




tl2.from("#services", {
    x: -100,
    opacity: 0,
    duration: 1,
  
})


// agar bina space ke multiple class de to uska matlab h ek hi element ke pas multiple class h
//AGAR  hm ek timeline ke do elements ko ek sath chalana chahte h to ,"koi bhi nam"  dono ke same kardo
tl2.from(".elem.line1.left", {
    x: -300,
    opacity: 0,
    duration:2
},"ANIM1")

tl2.from(".elem.line1.right", {
    x: 300,
    opacity: 0,
    duration:2
},"ANIM1")


tl2.from(".elem.line2.left", {
    x: -300,
    opacity: 0,
    duration:2
},"ANIM2")

tl2.from(".elem.line2.right", {
    x: 300,
    opacity: 0,
    duration:2
},"ANIM2")