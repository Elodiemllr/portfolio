
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