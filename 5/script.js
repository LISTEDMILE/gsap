var main = document.querySelector("#main");

var cursor = document.querySelector("#cursor");

var imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", function(e){
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    
  })
});


imageDiv.addEventListener("mouseenter", function () {
  cursor.innerHTML = "view more";
  gsap.to("#cursor", {
    scale: 4,
    backgroundColor:"rgba(255, 255, 255, 0.671)"
  })

})


imageDiv.addEventListener("mouseleave", function () {
  cursor.innerHTML = "";
  gsap.to("#cursor", {
    scale: 1,
    backgroundColor:"white"
  })
})