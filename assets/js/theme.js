function setTheme() {
    const themeLink = document.getElementById('theme-link');
    const isDarkMode = localStorage.getItem('isDarkMode') === 'true';

  
    if (isDarkMode) {
        themeLink.href = './assets/css/style.css'; 
    } else {
        themeLink.href = './assets/css/dark-mode.css';
    }

  
    const themeToggle = document.getElementById('hide-checkbox');
    if (themeToggle) {
        themeToggle.disabled = true;

        themeToggle.checked = isDarkMode;

        setTimeout(() => {
            themeToggle.disabled = false;
        }, 100); 
    }
}


function toggleTheme() {
    const isDarkMode = localStorage.getItem('isDarkMode') === 'true';
    localStorage.setItem('isDarkMode', !isDarkMode); 
    setTheme(); 
}

document.addEventListener('DOMContentLoaded', () => {
    setTheme();

    const themeToggle = document.getElementById('hide-checkbox');
    if (themeToggle) {
        themeToggle.addEventListener('change', toggleTheme);
    }
});
