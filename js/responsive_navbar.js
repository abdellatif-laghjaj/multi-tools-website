const navBar = document.querySelector('nav'),
  menuButton = document.querySelector('.menu-icon-fixed'),
  menuIcon = document.querySelector('.menu-icon');


var isMenuClicked = false;

menuButton.addEventListener('click', () => {
  if (isMenuClicked) {
    navBar.classList.toggle('mobile-nav');
    //add class to elements inside navbar
    navBar.querySelector('ul').classList.toggle('mobile-nav');
    //change data-feather attribute of menu-icon from grid to x
    menuButton.childNodes[0].setAttribute('data-feather', 'x');

    //check if the mobile navbar is open
    if (navBar.classList.contains('mobile-nav')) {
      //change data-feather attribute of menu-icon from x to grid
      menuButton.childNodes[0].setAttribute('data-feather', 'grid');
      //change color of menu-icon to white
      menuButton.style.color = '#fff';
      navBar.querySelectorAll('ul li a').forEach(element => {
        element.style.color = '#fff';
      });
    }
    isMenuClicked = false;
  } else {
    $('.menu-icon-fixed').css('color', '#000');
    isMenuClicked = true;
  }

  console.log('mobile navbar is open');
});

navBar.querySelectorAll('ul li').forEach(li => {
  li.addEventListener('click', () => {
    navBar.classList.remove('mobile-nav');
    navBar.querySelector('ul').classList.remove('mobile-nav');
    menuButton.setAttribute('data-feather', 'grid');
  });
});

//check if window is on mobile
if (window.innerWidth < 780) {
  navBar.querySelector('.theme-icon').classList.toggle('mobile-nav');
}