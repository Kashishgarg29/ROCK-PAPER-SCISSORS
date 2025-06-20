let rock = document.querySelectorAll(".rock");
let paper = document.querySelectorAll(".paper");
let scissors = document.querySelectorAll(".scissors");
let icon = document.querySelectorAll(".icon");
// let reset = document.querySelector(".reset");
let user = document.querySelector(".user");
let computer=document.querySelector(".computer");
let userselect = "a";
let computerselect = "a";
let options = ["rock","paper","scisoors"];
icon.forEach((icon) => {
    icon.addEventListener("click",()=>{
        console.log(icon);
        userselect = icon.innerText();
        console.log(`${userselect} selected`);
    })
});

