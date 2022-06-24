const settingsBtn = document.querySelector('.theme-icon');
const closeSettingsBtn = document.querySelector('.close-settings-btn');
const themePopup = document.querySelector('.theme-popup');
const colorItems = document.querySelectorAll('.color-item');

settingsBtn.addEventListener('click', showThemeSettings);
closeSettingsBtn.addEventListener('click', hideThemeSettings);

function showThemeSettings() {
    themePopup.style.display = 'flex';
}

function hideThemeSettings() {
    themePopup.style.display = 'none';
}

//color picker
const colors = [
    '#f44336',
    '#e91e63',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
]

for (let i = 0; i < colors.length; i++) {
    colorItems[i].style.backgroundColor = colors[i];
    colorItems[i].addEventListener('click', changeColor);
}

function changeColor(color) {
    document.body.style.backgroundColor = color.target.style.backgroundColor;
}