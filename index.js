// menu hamburger

let btnMenu = document.querySelector(".btn-menu");
let menu = document.querySelector(".nav-container");
let projetUn = document.querySelector(".projet1");
let projetDeux = document.querySelector(".projet2");

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

// les projects

const showbtn1 = () => {
  btnUn.style.display = "block";
};
const showbtn2 = () => {
  btnDeux.style.display = "block";
};

const hidebtn1 = () => {
  btnUn.style.display = "none";
};
const hidebtn2 = () => {
  btnDeux.style.display = "none";
};

projetUn.addEventListener("mouseover", showbtn1);
projetUn.addEventListener("mouseout", hidebtn1);
projetDeux.addEventListener("mouseover", showbtn2);
projetDeux.addEventListener("mouseout", hidebtn2);
