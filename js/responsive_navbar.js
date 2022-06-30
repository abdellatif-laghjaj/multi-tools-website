const header = document.querySelector('header');
const nav = document.querySelector('nav');
const menuButton = document.querySelector('.menu-btn');


menuButton.addEventListener('click', shwoSidebar);

function shwoSidebar() {
  nav.classList.toggle('mobile-nav');
}
