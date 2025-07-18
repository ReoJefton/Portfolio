// Theme toggle functionality
window.addEventListener('DOMContentLoaded', function () {
    const themeBtn = document.getElementById('themeToggleBtn');
    if (!themeBtn) return;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let darkMode = localStorage.getItem('theme') === 'dark' || prefersDark;

    function setTheme(dark) {
        if (dark) {
            document.body.classList.add('dark-theme');
            themeBtn.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-theme');
            themeBtn.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    }

    themeBtn.addEventListener('click', function () {
        darkMode = !darkMode;
        setTheme(darkMode);
    });

    setTheme(darkMode);
});
