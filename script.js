// // x : move how much pixels
// // duration: how much time for animation
// //  delay : how much is delay before animation
// rotate: rotate the element
// backgroundColor : for changing backgroundColor
// aise koi bhi css property likh skte h
// scale: size
// if we do for multiple to sabko ek ek karke chalane ke liye stagger
// stagger: 1 matlab original time 
// 2 matlab double
// -1 matlab last wala pehle


// //  gsap.to(element jo animate karna h,{
// properties})

// gsap.to matlab element ki initial postion se nyi position 
// gsap.from matlab nyi properties se original initial position


gsap.to("#box", {
    x: 100,
    duration: 2,
    delay: 1,
    rotate: 360,
    backgroundColor: "yellow",
    borderRadius: "50%",
    scale:0.5
})

gsap.from("h1", {
    x:100,
    duration: 1,
    delay: 1,
    stagger: 2,
    opacity:0
    
})

//repeat
// ek bar to chalta hi h fir jistna bhadao utna plus jaise repeat:1 matlab do bar chalega..
// -1 ka matlab infinite...
// yoyo:true matlab aage jaega fir wapis aaega...



gsap.to("#box21", {
    repeat: 0,
    x: 400,
    duration: 2,
    delay: 1,
    rotate: 360,
    backgroundColor: "yellow",
    borderRadius: "50%",
    scale:0.5
})



gsap.to("#box22", {
    repeat: 1,
    x: 400,
    duration: 2,
    delay: 1,
    rotate: 360,
    backgroundColor: "yellow",
    borderRadius: "50%",
    scale:0.5
})

gsap.to("#box23", {
    repeat: 2,
    x: 400,
    duration: 2,
    delay: 1,
    rotate: 360,
    backgroundColor: "yellow",
    borderRadius: "50%",
    scale: 0.5,
})

gsap.to("#box24", {
    repeat: -1,
    x: 400,
    duration: 2,
    delay: 1,
    rotate: 360,
    backgroundColor: "yellow",
    borderRadius: "50%",
    scale: 0.5,
})


gsap.to("#box25", {
    repeat: -1,
    x: 400,
    duration: 2,
    delay: 1,
    rotate: 360,
    backgroundColor: "yellow",
    borderRadius: "50%",
    scale: 0.5,
    yoyo:true
})




gsap.to("#box31", {
    backgroundColor: "white",
    duration: 1,
    delay: 1,
    x:100
})

gsap.to("#box32", {
    backgroundColor: "white",
    delay: 2,
    duration: 1,
    x: 100,
    borderRadius:"50%"
})