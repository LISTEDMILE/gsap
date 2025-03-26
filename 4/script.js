var initial = `M 10 100 Q 200 100 360 100`;

var finalPath = `M 10 100 Q 200 100 360 100`;

var string = document.querySelector("#string");

// attr: attribute

string.addEventListener("mousemove", function (e) {
  path = `M 10 100 Q ${e.x} ${e.y} 360 100`;

  gsap.to("svg path", {
    attr: {
      d: path,
    },
    duration: 0.5,
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: {
      d: finalPath,
    },
    duration: 1,
    ease: "elastic.out(1,0.1)",
  });
});
