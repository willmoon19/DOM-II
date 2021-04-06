// Your code goes here

//on click nav-link honk
//button onclick change color
// keydown move fun bus?
//

const fun = document.querySelector("h1")
const navButtons = document.querySelectorAll("nav a")
const aboutButton = navButtons[1];

aboutButton.addEventListener("click", (event) => {
   event.target.style.color = "purple";
})

fun.addEventListener("mouseenter", (event) => {
    event.target.style.color = "teal";
})

fun.addEventListener("mouseleave", (event) => {
    event.target.style.color = "black";
})

const funClass = document.querySelector(".logo-heading")

document.addEventListener("keydown", (event) => {
    if (event.key === "1"){
        funClass.style["font-size"] = "4rem";
        console.log("hello");
    }
})
