var h1Text = document.querySelector("h1").innerText;

h1TextSplit = h1Text.split("");


var clutter = "";

var half = h1TextSplit.length/2;

h1TextSplit.forEach((element, indexx) => {
    if (indexx < half) {
        clutter += `<span class="aspan">${element}</span>`
    }
    else {
        clutter += `<span class="bspan">${element}</span>`
    }
});

document.querySelector("h1").innerHTML = clutter;


gsap.from("h1 .aspan", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger: 0.1,
    
})


gsap.from("h1 .bspan", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger: -0.1,
    
})