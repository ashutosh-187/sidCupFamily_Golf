var mouse = document.querySelector("#cursor")
var mouseBlur = document.querySelector("#cursorBlur")
var h4all = document.querySelectorAll("#nav h4")
var arrow = document.querySelector("#arrow")

document.addEventListener("mousemove", function (details) {
    mouse.style.left = details.x + 12 + "px"
    mouse.style.top = details.y + "px"
    mouseBlur.style.left = details.x - 300 + "px"
    mouseBlur.style.top = details.y - 300 + "px"
})


gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})

h4all.forEach(function (ele) {
    ele.addEventListener("mouseenter", function () {
        mouse.style.scale = 2
        mouse.style.border = "1px solid white"
        mouse.style.backgroundColor = "transparent"
        ele.style.color = "#ADE023"
        ele.style.scale = 1.3
    })
    ele.addEventListener("mouseleave", function () {
        mouse.style.scale = 1
        mouse.style.border = "0px solid #95C11E"
        mouse.style.backgroundColor = "#95C11E"
        ele.style.color = "white"
        ele.style.scale = 1 
    })
})

arrow.addEventListener("mouseenter", () => {
    mouse.style.scale = 2
    mouse.style.border = "1px solid white"
    mouse.style.backgroundColor = "transparent"
})
arrow.addEventListener('mouseleave', () => {
    mouse.style.scale = 1
    mouse.style.border = "0px solid #95C11E"
    mouse.style.backgroundColor = "#95C11E"
})

gsap.from("#aboutUs img, #aboutUs-in", {
    y: 90,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: "#aboutUs",
        scroller: "body",
        // markers:true,
        start: "top 60%",
        end: "top 55%",
        scrub: 2
    }
})

gsap.from(".card", {
    scale: 0.9,
    opacity: 0,
    duration: 1,
    stragger: 1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        // markers:true,
        start: "top 60%",
        end: "top 55%",
        scrub: 1
    }
})

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 47%",
        scrub: 4
    }
})

gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 47%",
        scrub: 4
    }
})

gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        // markers: true,
        start: "top 75%",
        end: "top 70%",
        scrub: 2
    }
})