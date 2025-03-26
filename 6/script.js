var menu = document.querySelector("#nav i");

var cross = document.querySelector("#full i");




var tl = gsap.timeline();

tl.to("#full", {
  right: 0,
  duration: 0.8,
  
});

tl.from("#full h4", {
  x: 100,
  duration: 0.4,
  stagger: 0.1,
  opacity:0
})

tl.from("#full i", {
  opacity:0,
})

// to pause an animation...
tl.pause();


menu.addEventListener("click", function () {
  //to play animation
  tl.play();
});


cross.addEventListener("click", function () {
  // to reverse animation
  tl.reverse();
})