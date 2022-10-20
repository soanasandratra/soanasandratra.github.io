// menu hamburger

let btnMenu = document.querySelector(".btn-menu");
let menu = document.querySelector(".nav-container");

const showMenu = (e) => {
  if (menu.style.display != "none") {
    e.target.src = "./assets/images/hamburger.png";
    menu.style.display = "none";
  } else {
    e.target.src = "./assets/images/close.png";
    menu.style.display = "block";
  }
};

btnMenu.addEventListener("click", showMenu);
