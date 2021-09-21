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
}); /*

/* portfolio*/

const portfolio__box = document.querySelectorAll(".portfolio__box");

function showButton(e) {
    e.currentTarget.children[0].classList.add("portfolio__hover");
    e.currentTarget.children[1].classList.add("portfolio__sitelink");
    e.currentTarget.children[2].classList.add("portfolio__github");
}

function removeButton(e) {
    e.currentTarget.children[0].classList.remove("portfolio__hover");
    e.currentTarget.children[1].classList.remove("portfolio__sitelink");
    e.currentTarget.children[2].classList.remove("portfolio__github");
}

portfolio__box.forEach((el) => {
    el.addEventListener("mouseover", showButton);
});

portfolio__box.forEach((el) => {
    el.addEventListener("mouseleave", removeButton);
});

/*SCROLL*/

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
}
window.addEventListener("scroll", scrollActive);

/*change background header */

function scrollHeader() {
    const nav = document.getElementById("header");
    if (this.scrollY >= 80) nav.classList.add("scroll-header");
    else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*show scroll up*/

function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
