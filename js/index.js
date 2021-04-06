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

fun.addEventListener("mouseover", (event) => {
    event.target.style.color = "teal";
})

