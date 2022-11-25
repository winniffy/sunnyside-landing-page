'use strict'

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav_list_group');
const navItems = document.querySelectorAll('.nav_item');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});