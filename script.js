// const navToggle = document.querySelector('.nav-button');
// const nav = document.querySelector('.modal-container');


// navToggle.addEventListener('click', () => {
//     document.body.classList.toggle('nav--visible');
//     nav.style.transition = 'transform ease-in 1s';
// })

const btnHamburger = document.getElementById("btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", ()=>{
    if(header.classList.contains("open")){
        body.classList.remove("noscroll");
        header.classList.remove("open");
        fadeElems.forEach((elem)=> {
            elem.classList.add("fade-out");
            elem.classList.remove("fade-in");
       });
    }
    else {
        body.classList.add("noscroll");
        header.classList.add("open");
        fadeElems.forEach((elem)=> {
             elem.classList.add("fade-in");
             elem.classList.remove("fade-out");
        });
    }
})
