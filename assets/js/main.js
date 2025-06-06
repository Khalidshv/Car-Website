/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')
/* Menu show */


if(navToggle){
    navToggle.addEventListener ('click', () =>{
    navMenu.classList.add('show-menu')
})
}

if(navClose){
    navClose.addEventListener ('click', () =>{
    navMenu.classList.remove('show-menu')
})
}

/*== SWIPER HOME =*/
const swiperHome = new Swiper('.home__swiper', {
pagination: {
el: ".swiper-pagination",
clickable: true,
renderBullet: (index, className) => {
return '<span class="' + className + '">' + String(index + 1).padStart(2, '0') + "</span>";
},  
},  
})  ;

  
  
/*  =============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () =>{
const header = document.getElementById('header')
// Add a class if the bottom offset is greater than 50 of the v.
    this.scrollY >= 50 ? header.classList.add('bg-header')
                        : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)
  
/*  =============== SHOW SCROLL UP ===============*/ 
  
  
/*  =============== SCROLL SECTIONS ACTIVE LINK ===============*/
  
  
/*  =============== SCROLL REVEAL ANIMATION ===============*/