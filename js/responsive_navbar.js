const header = document.querySelector('header');
const nav = document.querySelector('nav');
const menuButton = document.querySelector('.menu-btn');


menuButton.addEventListener('click', () => {
  nav.classList.toggle('mobile-nav');
}
);