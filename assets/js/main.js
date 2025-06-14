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

const scrollUp = () =>{
const scrollUp = document.getElementById('scroll-up')

this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll' , scrollUp) 

/*  =============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section [id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

sections.forEach(current =>{
const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - 58,
    sectionId = current.getAttribute('id'),
    sectionsClass = document.querySelector('.nav__menu_a[href*=' + sectionId + ']')

if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
sectionsClass.classList.add('active-link') 
}else{
sectionsClass.classList.remove('active-link')
}
})
}
window.addEventListener('scroll', scrollActive)
  
/*  =============== SCROLL REVEAL ANIMATION ===============*/