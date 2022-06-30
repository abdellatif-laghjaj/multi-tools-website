feather.replace();

// Swiper
var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
});

//Kute Js
const tween = KUTE.fromTo(
    "#blob-1",
    { path: "#blob-1" },
    { path: "#blob-2" },
    { repeat: 999, duration: 3000, yoyo: true }
);
tween.start();

equalHeight();
equalHeightProjects();

//Make about text and about skills text to equal height
function equalHeight() {
    var aboutHeight = $(".about-text").height();
    var aboutSkillsHeight = $(".about-skills").height();
    if (aboutHeight > aboutSkillsHeight) {
        $(".about-skills").height(aboutHeight);
    } else {
        $(".about-text").height(aboutSkillsHeight);
    }
}

//Make projects cards equal height
function equalHeightProjects() {
    var projectsHeight = $("#projects .card").height();
    // get the tallest card
    $("#projects .card").each(function () {
        if ($(this).height() > projectsHeight) {
            projectsHeight = $(this).height();
        }
    });
    // set all cards to that height
    $("#projects .card").height(projectsHeight);
}

const copyrightYear = document.getElementById('copyright-year');

//get current year
function getCurrentYear() {
    return new Date().getFullYear();
}

copyrightYear.innerHTML = getCurrentYear();


//change the background color of the navbar when user scroll  80px down


//check if width of the window is less than 900px
if ($(window).width() < 900) {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 40) {

            //check if the theme mode is light
            if (document.documentElement.style.getPropertyValue('--bg-color') == '#F6FBF4') {
                $('header .logo').css('color', '#fff');
                $('header nav ul .nav-link a').css('color', '#fff');
                $('header nav ul .theme-icon').css('color', '#fff');
                $('.menu-icon .menu-icon-fixed').css('color', '#fff');
            }
            $('header').css('background-color', 'rgba(0,0,0,0.96)');
            $('header').css('border-radius', '0px');
            $('header').css('box-shadow', 'none');
            $('header').css('backdrop-filter', 'blur(0px)');
            $('header').css('-webkit-backdrop-filter', 'blur(0px)');
            $('header').css('border', 'none');
        }else {
            $('header').css('background-color', 'rgba(255,255,255,0.25)');
            $('header').css('box-shadow', '0 8px 32px 0 rgba(31, 38, 135, 0.37)');
            $('header').css('backdrop-filter', 'blur(0px)');
            $('header').css('-webkit-backdrop-filter', 'blur(0px)');
            $('header').css('border', '1px solid rgba(255, 255, 255, 0.18)');

            //change nav links color back to default
            $('header nav ul .nav-link a').css('color', 'var(--text-color)');
            $('header nav ul .theme-icon').css('color', 'var(--text-color)');
            $('header .logo').css('color', 'var(--text-color)');
            $('.menu-icon .menu-icon-fixed').css('color', 'var(--text-color)');
        }
    });
}else {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 80) {
            $('header').css('background-color', 'rgba(0,0,0,0.9)');
            $('header').css('border-radius', '0px');
            $('header').css('box-shadow', 'none');
            $('header').css('backdrop-filter', 'blur(0px)');
            $('header').css('-webkit-backdrop-filter', 'blur(0px)');
            $('header').css('border', 'none');
        }else {
            $('header').css('background-color', 'rgba(255,255,255,0.25)');
            $('header').css('box-shadow', '0 8px 32px 0 rgba(31, 38, 135, 0.37)');
            $('header').css('backdrop-filter', 'blur(0px)');
            $('header').css('border-radius', '999px');
            $('header').css('-webkit-backdrop-filter', 'blur(0px)');
            $('header').css('border', '1px solid rgba(255, 255, 255, 0.18)');
        }
    });
}
