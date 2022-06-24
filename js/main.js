const settingsBtn = document.querySelector('.theme-icon');
const closeSettingsBtn = document.querySelector('.close-settings-btn');
const themePopup = document.querySelector('.theme-popup');

settingsBtn.addEventListener('click', showThemeSettings);
closeSettingsBtn.addEventListener('click', hideThemeSettings);

function showThemeSettings() {
    themePopup.style.display = 'flex';
}

function hideThemeSettings() {
    themePopup.style.display = 'none';
    console.log('hide');
}