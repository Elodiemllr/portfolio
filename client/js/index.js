
/*show menu */
//on recupère notre element par son id 
const 
    navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


//  si notre const existe 
if(navToggle){
    //on ajoute un écouteur, et au click sur notre toggle 
    //on ajoute la class show-menu a notre navMenu qui permettra de le montrer
   

    navToggle.addEventListener('click', () => {
navMenu.classList.add('show-menu')
    })
}

if(navClose){
     //on ajoute un écouteur, et au click sur notre close 
    //on enlève la class show-menu a notre navMenu qui permettra de cacher notre menu
   
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    }
    )
}

const navLink = document.querySelectorAll('.nav__link');

//on créer une function qui quand on click sur un nav link de notre menu, on cache le menu en lui enlevant sa classe
function linkAction() {
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}

//on execute la fonction pour chacun de nox nav link
navLink.forEach(n => n.addEventListener('click', linkAction))