const intro_text = document.querySelector('.intro-text');

ScrollReveal().reveal('.intro-text', {
    duration: 2000,
    origin: 'left',
    distance: '300px',
    delay: 100,
    easing: 'ease-in-out'
});

ScrollReveal().reveal('.swiper', {
    duration: 2000,
    origin: 'right',
    distance: '300px',
    delay: 200,
    easing: 'ease-in-out'
});