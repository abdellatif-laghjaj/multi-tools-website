const navBar = document.querySelector('nav'),
  menuButton = document.querySelector('.menu-icon-fixed'),
  menuIcon = document.querySelector('.menu-icon'),
  settingsIcon = nav.querySelector('.theme-icon');


menuButton.addEventListener('click', () => {
  navBar.classList.toggle('mobile-nav');
  //add class to elements inside navbar
  navBar.querySelector('ul').classList.toggle('mobile-nav');
  settingsIcon.classList.toggle('mobile-nav');
  //change data-feather attribute of menu-icon from grid to x
  menuButton.setAttribute('data-feather', 'x');
});

navBar.querySelectorAll('ul li').forEach(li => {
  li.addEventListener('click', () => {
    navBar.classList.remove('mobile-nav');
    navBar.querySelector('ul').classList.remove('mobile-nav');
    menuButton.setAttribute('data-feather', 'grid');
  });
});