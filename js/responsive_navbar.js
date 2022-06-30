const navBar = document.querySelector('nav'),
  menuButton = document.querySelector('.menu-icon-fixed');


menuButton.addEventListener('click', () => {
  navBar.classList.toggle('mobile-nav');
  //add class to elements inside navbar
  navBar.querySelector('ul').classList.toggle('mobile-nav');
});