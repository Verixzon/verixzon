const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".main-menu-items");


menuButton.addEventListener("click", ()=>{

    menu.classList.toggle("active");

});