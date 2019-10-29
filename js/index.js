// Your code goes here

const navItems = document.querySelectorAll("nav a").forEach(e => {
    e.addEventListener("mouseover",function(){
        e.style.color = "aqua"
    })
});
const heading = document.querySelector(".hey");
document.addEventListener("keydown",function(){
    heading.style.background = "orange"
})
document.addEventListener("keyup",function(){
    heading.style.background = "purple";
    heading.stopPropagation();
})
const wheel = document.querySelector(".logo-heading");
wheel.addEventListener("wheel",function(){
    wheel.style.fontSize = "6rem"
})
const load = document.querySelector(".intro img");
load.addEventListener("load",function(){
    load.style.width = "50%"
})
const click = document.querySelector(".img-content img");
click.addEventListener("click", function(){
    click.style.border = "5px solid green";
})
click.addEventListener("dblclick", function(){
    click.style.display = "none";
})
const focus = document.querySelector("#demo");
focus.addEventListener("focus",function(e){
    e.target.style.background = "blue"
})

const scroll = document.querySelector(".text-content h2");
window.addEventListener("scroll", function(){
    scroll.style.color = "red"
})
const resize = document.querySelector(".content-destination h2");
window.addEventListener("resize", function(){
    resize.style.background = "teal"
})
const prevent = document.querySelector(".nav-link1");
prevent.addEventListener("click", function(e){
    e.preventDefault();
})