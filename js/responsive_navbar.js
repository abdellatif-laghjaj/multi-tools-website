const nav = document.querySelector('nav');
const navLinks = nav.querySelector('.navbar-links');
const menuButton = document.querySelector('.menu-icon-fixed');


menuButton.addEventListener('click', () => {
  nav.classList.toggle('mobile-nav');
  navLinks.classList.toggle('mobile-nav');
});