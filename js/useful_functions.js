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

if (window.scrollY <= 40) {
    $("header").css("background-color", "rgba(0,0,0,0.5)");
}

window.addEventListener('scroll', function () {
    $("header").css("background-color", "rgba(0,0,0,0.5)");
});

