'use strict';

const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

const carouselItems = Array.from(document.querySelectorAll('.carousel-item'));
const navItems = Array.from(document.querySelectorAll('.nav-item'));
const CAROUSEL_SIZE = carouselItems.length;

leftBtn.addEventListener('click', swipe);
rightBtn.addEventListener('click', swipe);

function swipe(e) {
    const currentCarouselItem = document.querySelector('.carousel-item.act');
    const currentIndex = carouselItems.indexOf(currentCarouselItem);
    
    let nextIndex;

    if (e.currentTarget.classList.contains('left')) {
        if (currentIndex === 0) {
            nextIndex = CAROUSEL_SIZE - 1;
        }
        else {
            nextIndex = currentIndex - 1;
        }
    }
    else {
        if (currentIndex === CAROUSEL_SIZE - 1) {
            nextIndex = 0;
        }
        else {
            nextIndex = currentIndex + 1;
        }
    }

    carouselItems[nextIndex].classList.add('act');
    navItems[nextIndex].classList.add('act');
    currentCarouselItem.classList.remove('act');
    navItems[currentIndex].classList.remove('act');
}

const carouselNav = document.querySelector('.carousel-nav');
carouselNav.addEventListener('click', dots);

function dots(e) {
    if (e.target.classList.contains('nav-item') && !e.target.classList.contains('act')) {
        const currentNavIndex = Array.from(document.querySelectorAll('.nav-item')).indexOf(document.querySelector('.nav-item.act'));
        const clickedNavIndex = Array.from(document.querySelectorAll('.nav-item')).indexOf(e.target);
        carouselItems[currentNavIndex].classList.remove('act');
        carouselItems[clickedNavIndex].classList.add('act');
        document.querySelector('.nav-item.act').classList.remove('act');
        e.target.classList.add('act');
    }
    else {
        return
    }
}