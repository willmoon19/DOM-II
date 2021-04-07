// Your code goes here

//on click nav-link honk
//button onclick change color
// keydown move fun bus?
//

const fun = document.querySelector("h1")
const navButtons = document.querySelectorAll("nav a")
const blogButton = navButtons[2];
const aboutButton = navButtons[1];
const contactButton = navButtons[3];

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
        funClass.style.color = "yellow"
    };
})

// function zoom(event) {
//     event.preventDefault();
//     if (event.deltaY < 0) {
//         scale *= event.deltaY * -.01;
//     } else {
//         scale /= event.deltaY * .01;
//     }
//     scale = Math.min(Math.max(.125, scale), 4);

//     funClass.style.transform = `scale(${scale})`;
// }
// let scale = 1;
// document.onwheel = zoom;

let scale = 1;
funClass.addEventListener("wheel", (event) => {
    if (event.deltaY < 0){
        scale *= event.deltaY * -.01;
    } else {
        scale /= event.deltaY * .01;
    }
    scale = Math.min(Math.max(.125, scale), 4);
    funClass.style.transform = `scale(${scale})`;
});

// let scrollPosition = 0;
// let ticking = false;
const h4Titles = document.querySelectorAll("h4");

// function changeh2(scrollPosition) {
//     scrollPosition
//   h2Titles.forEach(item).style.color = "orange";
// }

// document.addEventListener('scroll', (event) => {
//   let scrollPosition = window.scrollY;

//   if (!ticking) {
//     window.requestAnimationFrame(function() {
//       changeh2(scrollPosition);
//       ticking = false;
//     });

//     ticking = true;
//   }
// });

document.addEventListener('scroll', (event) => {
    if(window.scrollY > 1000){
        h4Titles.forEach((item) => item.style.color = "orange");
    };
});



const makeBig = document.querySelectorAll("img");


document.addEventListener("dblclick", (event) => {
    if(document.height < 1){
        document.style.height *= 2;
    }
})

    // const input = document.createElement("input");

const img1 = makeBig[0]
const navBar = document.querySelector("nav")


// document.addEventListener("resize", (event) => {
//     if(navBar.style.width > 200){
//         navBar.style.border = "3px solid black"
//     }
// });
  
const signButton = document.querySelectorAll(".btn");
const button1 = signButton[0];
const button2 = signButton[1];
const button3 = signButton[2];

button1.addEventListener("mouseenter", (event) => {
    event.target.style.background = "orange";
    event.target.style.color = "blue";
    event.target.textContent = "Good Choice!"
});

button1.addEventListener("mouseleave", (event) => {
    event.target.style.background = "blue";
    event.target.style.color = "white";
    event.target.textContent = "Sign Me Up!";
});

Array.from(document.links).forEach(function (link){
    link.addEventListener("click", (event) => {
        event.preventDefault();
    });
});


document.body.addEventListener("click", (event) => console.log("howdy"));
document.addEventListener("click", (event) => console.log("howdy"));
contactButton.addEventListener("click", (event) => event.stopPropagation());
contactButton.addEventListener("click", (event) => console.log("howdy"));

