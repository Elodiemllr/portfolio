/*show menu */

//on recupère notre element par son id
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

//  si notre const existe
if (navToggle) {
    //on ajoute un écouteur, et au click sur notre toggle
    //on ajoute la class show-menu a notre navMenu qui permettra de le montrer

    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

if (navClose) {
    //on ajoute un écouteur, et au click sur notre close
    //on enlève la class show-menu a notre navMenu qui permettra de cacher notre menu

    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

const navLink = document.querySelectorAll(".nav__link");

//on créer une function qui quand on click sur un nav link de notre menu, on cache le menu en lui enlevant sa classe
function linkAction() {
    const navMenu = document.getElementById("nav-menu");

    navMenu.classList.remove("show-menu");
}

//on execute la fonction pour chacun de nox nav link
navLink.forEach((n) => n.addEventListener("click", linkAction));

//up and down skills
const skillsContent = document.getElementsByClassName("skills__content"),
    skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
    let itemClass = this.parentNode.className;
    var i;

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = "skills__content skills__close";
    }
    if (itemClass === "skills__content skills__close") {
        this.parentNode.className = "'skills__content skills__open";
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener("click", toggleSkills);
});

const tabs = document.querySelectorAll("[data-target]"),
    tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);
        console.log("tab", tab);
        console.log("target", target);

        tabContents.forEach((tabContent) => {
            tabContent.classList.remove("qualification__active");
        });
        target.classList.add("qualification__active");
        tabs.forEach((tab) => {
            tab.classList.remove("qualification__active");
        });
        tab.classList.add("qualification__active");
    });
});

/* portfolio*/
const imgHover = document.querySelectorAll("#portfolio__imgHover");

console.log(imgHover);

function colorChange(e) {
    e.target.classList.add("test");
}

imgHover.forEach((el) => {
    el.addEventListener("click", colorChange);
});
