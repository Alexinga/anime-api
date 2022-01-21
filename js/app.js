`use strict`;
const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('.navbar-links')
const leftArrow = document.querySelector('.btn-left');
const rightArrow = document.querySelector('.btn-right');
const slides = document.querySelectorAll('.slide-1');
const navA = document.querySelectorAll ('.navbar-link');
const faq = document.querySelectorAll('.faq');
let currSlide = 0;
const maxSlide = slides.length - 1;

loadEvent();
function loadEvent() {
    slides.forEach((s, i) => s.style.transform = `translateX(${100 * i}%)`);
    navA.forEach(a => a.addEventListener('click', closeMenu));
    navUl.addEventListener('click', smoothScroll);
    hamburger.addEventListener('click', openMenu);
    rightArrow.addEventListener('click', nextSlide);
    leftArrow.addEventListener('click', prevSlide);
    faq.forEach(i => i.addEventListener('click', dropDown));
}

function smoothScroll(e) {
    e.preventDefault();
    if(e.target.classList.contains('navbar-link')){
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    }
}

function dropDown() {
    this.classList.toggle('active');
}
function openMenu() {
    hamburger.classList.toggle('active');
    navUl.classList.toggle('active');
}
function closeMenu() {
    navUl.classList.remove('active');
    hamburger.classList.remove('active');
}

function slideImg(currSlide) {
    slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - currSlide)}%)`);
}
function nextSlide() {
    if(currSlide === maxSlide){
        currSlide = 0;
    } else {
        currSlide++;
    }
    slideImg(currSlide);
}
function prevSlide() {
    if(currSlide === 0) {
        currSlide = maxSlide;
    } else {
        currSlide--;
    }
    slideImg(currSlide);
}


// const testimonialContainer = document.querySelector('.testimonial-container');
// let isDown = false;
// let startX;
// let scrollLeft;

// testimonialContainer.addEventListener('mousedown', (e) => {
//     isDown = true;
//     testimonialContainer.classList.add('active');
//     startX = e.pageX - testimonialContainer.offsetLeft;
//     scrollLeft = testimonialContainer.scrollLeft;
// });
// testimonialContainer.addEventListener('mouseleave', () => {
//     isDown = false;
//     console.log('hi')
//     testimonialContainer.classList.remove('active');
// });
// testimonialContainer.addEventListener('mouseup', () => {
//     isDown = false;
//     testimonialContainer.classList.remove('active');
// });
// testimonialContainer.addEventListener('mousemove', (e) => {
//     e.preventDefault();
//     if(!isDown) return
//     const x = e.pageX - testimonialContainer.offsetLeft;
//     const walk = x - startX
//     console.log('hi')
//     testimonialContainer.scrollLeft = scrollLeft - walk;
// });