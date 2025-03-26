gsap.from("#page1 #box", {
    scale: 0,
    duration: 2,
    delay: 1,
    rotate:360
})

// scroll trigger - if we want animation on the basis of scroll....
// gsap.cdn se scrool trigger wali script tab ke through import karni h...

gsap.from("#page2 #box", {
    scale: 0,
    x:"120%",
    duration: 2,
    delay: 1,
    rotate: 360,
    scrollTrigger:"#page2 #box"
})




//better method

// trigger: kis element se trigger ho

// scroller: body

// markers mark the start and end point of animation on the screen

//start : we can define when to start animation based on how much ratio the element of the screen reached...

// end : when to end...

gsap.from("#page3 #box", {
    scale: 0,
    x:"-120%",
    duration: 2,
    rotate: 360,
    scrollTrigger: {
        trigger: "#page3 #box",
        scroller: "body",
        markers:true,
        start: "top 60%",
        end:"top 40%"
    }
})



// if we want ki duration fixed na hoke scroll ke base pe ho jae to scrub...
// scrub :true matlab start pe start end pe end...
// also scrub: 1-5 based on smoothness...

gsap.from("#page4 #box", {
    scale: 0,
    x:"-120%",
    duration: 2,
    rotate: 360,
    scrollTrigger: {
        trigger: "#page4 #box",
        scroller: "body",
        markers:true,
        start: "top 60%",
        end: "top 40%",
        scrub:5
    }
})