/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing')

        window.removeEventListener('keydown', handleFirstTab)
        window.addEventListener('mousedown', handleMouseDownOnce)
    }

}

const handleMouseDownOnce = () => {
    document.body.classList.remove('user-is-tabbing')

    window.removeEventListener('mousedown', handleMouseDownOnce)
    window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");

const toggleBackToTop = () => {
    if (window.scrollY > 300) { // Show button after scrolling down 300px
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
};

window.addEventListener("scroll", toggleBackToTop);

/* -----------------------------------------
  Dark/Light Mode Switch 
 ---------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    const modeSwitchContainer = document.createElement('div');
    modeSwitchContainer.classList.add('mode-switch-container');

    const modeSwitch = document.createElement('div');
    modeSwitch.classList.add('mode-switch');
    modeSwitch.setAttribute('aria-label', 'Toggle dark and light mode');
    modeSwitch.setAttribute('role', 'switch');
    modeSwitch.setAttribute('aria-checked', 'false');

    const sunIcon = document.createElement('span');
    sunIcon.classList.add('mode-switch-icon');
    sunIcon.innerHTML = '☀️'; // Sun icon

    const moonIcon = document.createElement('span'); // Changed from document.classList.add to document.createElement
    moonIcon.classList.add('mode-switch-icon');
    moonIcon.innerHTML = '🌙'; // Moon icon

    const slider = document.createElement('div');
    slider.classList.add('slider');

    modeSwitch.appendChild(sunIcon);
    modeSwitch.appendChild(moonIcon);
    modeSwitch.appendChild(slider);
    modeSwitchContainer.appendChild(modeSwitch);

    document.body.appendChild(modeSwitchContainer); // Append to body or a specific header element

    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        modeSwitch.setAttribute('aria-checked', 'true');
    }

    // Toggle theme on click
    modeSwitch.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLightMode = document.body.classList.contains('light-mode');
        localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
        modeSwitch.setAttribute('aria-checked', isLightMode ? 'true' : 'false');
    });
});