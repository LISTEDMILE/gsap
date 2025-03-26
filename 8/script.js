// gsap.from("nav h1", {
//     y: -10,
//     delay: 0.3,
//     opacity: 0,
//     duration:1
// });

// gsap.from("nav h4, nav button", {
//     y: -10,
//     delay: 0.3,
//     opacity: 0,
//     duration:1
// })


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
    duration:0.6
})