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
/*  =============== REMOVE MENU MOBILE ===============*/
  
  
/*  =============== SWIPER HOME ===============*/ 
  
  
/*  =============== CHANGE BACKGROUND HEADER ===============*/
  
  
/*  =============== SHOW SCROLL UP ===============*/ 
  
  
/*  =============== SCROLL SECTIONS ACTIVE LINK ===============*/
  
  
/*  =============== SCROLL REVEAL ANIMATION ===============*/