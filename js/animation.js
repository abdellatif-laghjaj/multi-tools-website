//Aimations for intro
ScrollReveal().reveal('.intro-text', {
    duration: 2000,
    origin: 'left',
    distance: '300px',
    delay: 300,
    easing: 'ease-in-out'
});

ScrollReveal().reveal('.swiper', {
    duration: 2000,
    origin: 'right',
    distance: '300px',
    delay: 300,
    easing: 'ease-in-out'
});

ScrollReveal().reveal('h3', {
    duration: 2000,
    origin: 'left',
    distance: '300px',
    delay: 300,
    easing: 'ease-in-out'
});

//Aimations for about
ScrollReveal().reveal('.about-text', {
    duration: 2000,
    origin: 'left',
    distance: '300px',
    delay: 300,
    easing: 'ease-in-out'
});

ScrollReveal().reveal('.about-image', {
    duration: 2000,
    origin: 'bottom',
    distance: '300px',
    delay: 400,
    easing: 'ease-in-out'
});

ScrollReveal().reveal('.about-skills', {
    duration: 2000,
    origin: 'right',
    distance: '300px',
    delay: 300,
    easing: 'ease-in-out'
});

//Aimations for services
ScrollReveal().reveal('.service-card', {
    duration: 2000,
    origin: 'bottom',
    distance: '300px',
    delay: 300,
    easing: 'ease-in-out'
});

//Aimations for projects
ScrollReveal().reveal('#projects p', {
    duration: 2000,
    origin: 'left',
    distance: '300px',
    delay: 300,
    easing: 'ease-in-out'
});

ScrollReveal().reveal('#projects .container .card', {
    duration: 2000,
    origin: 'bottom',
    distance: '300px',
    delay: 300,
    easing: 'ease-in-out'
});

//Aimations for contact
for (let i = 0; i < 4; i++) {
    ScrollReveal().reveal(`#contact-form .input-container.icp${i+1}`, {
        duration: 2000,
        origin: 'left',
        distance: '300px',
        delay: (1 + i) * 100,
        easing: 'ease-in-out'
    });
}

ScrollReveal().reveal('.submit-btn', {
    duration: 2000,
    origin: 'right',
    distance: '300px',
    delay: 500,
    easing: 'ease-in-out'
});