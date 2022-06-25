const settingsBtn = document.querySelector('.theme-icon');
const closeSettingsBtn = document.querySelector('.close-settings-btn');
const themePopup = document.querySelector('.theme-popup');
const colorItems = document.querySelectorAll('.color-item');
const themeModeBtns = document.querySelectorAll('.theme-item');
const navLinks = document.querySelectorAll('.nav-link');
const blob1 = document.getElementById('blob-1');
const blob2 = document.getElementById('blob-2');

settingsBtn.addEventListener('click', showThemeSettings);
closeSettingsBtn.addEventListener('click', hideThemeSettings);

function showThemeSettings() {
    themePopup.style.display = 'flex';
}

function hideThemeSettings() {
    themePopup.style.display = 'none';
}

//load themes from local storage
loadTheme();

//color picker
const primaryColors = [
    '#f44336',
    '#e91e63',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
]

const secondaryColors = [
    '#ff9800',
    '#ff5722',
    '#795548',
    '#607d8b',
    '#3f51b5',
];

for (let i = 0; i < primaryColors.length; i++) {
    colorItems[i].style.backgroundColor = primaryColors[i];
    colorItems[i].addEventListener('click', () => changeColor(event, i));
}

function changeColor(color, index) {
    document.documentElement.style.setProperty('--bg-color', color.target.style.backgroundColor);
    document.documentElement.style.setProperty('--secondary-color', secondaryColors[index]);
    blob1.style.fill = document.documentElement.style.getPropertyValue('--secondary-color');
    blob2.style.fill = document.documentElement.style.getPropertyValue('--secondary-color');
    saveTheme();
}

//change theme mode
themeModeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if(btn.classList.contains('dark-mode')) {
            document.documentElement.style.setProperty('--bg-color', '#212121');
            document.documentElement.style.setProperty('--text-color', '#fff');
        }else {
            document.documentElement.style.setProperty('--bg-color', '#fff');
            document.documentElement.style.setProperty('--text-color', '#000');
        }
        saveTheme();
    })
});


//save themes to local storage
function saveTheme() {
    localStorage.setItem('theme-mode', document.documentElement.style.getPropertyValue('--bg-color'));
    localStorage.setItem('theme-text-color', document.documentElement.style.getPropertyValue('--text-color'));
    localStorage.setItem('theme-secondary-color', document.documentElement.style.getPropertyValue('--secondary-color'));
}

//load themes from local storage
function loadTheme() {
    document.documentElement.style.setProperty('--bg-color', localStorage.getItem('theme-mode'));
    document.documentElement.style.setProperty('--text-color', localStorage.getItem('theme-text-color'));
    document.documentElement.style.setProperty('--secondary-color', localStorage.getItem('theme-secondary-color'));
}

//add active class to the clicked link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(link => {
            link.classList.remove('active-link');
        });
        link.classList.add('active-link');
    })
});