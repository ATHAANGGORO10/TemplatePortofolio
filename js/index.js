(() => {
     'use strict';
     const getStoredTheme = () => localStorage.getItem('theme');
     const setStoredTheme = theme => localStorage.setItem('theme', theme);
     const getPreferredTheme = () => {
          const storedTheme = getStoredTheme();
          if (storedTheme) {
               return storedTheme;
          }
          return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
     };
     const setTheme = theme => {
          if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
               document.documentElement.setAttribute('data-bs-theme', 'dark');
          } else {
               document.documentElement.setAttribute('data-bs-theme', theme);
          }
     };
     setTheme(getPreferredTheme());
     const updateDarkModeStatus = () => {
          const darkModeStatus = document.getElementById('darkModeStatus');
          if (darkModeStatus) {
               const currentTheme = getStoredTheme() || getPreferredTheme();
               darkModeStatus.textContent = ` (${currentTheme === 'dark' ? 'Dark' : 'Light'} Mode)`;
          }
     };
     const updateIcon = () => {
          const currentTheme = getStoredTheme() || getPreferredTheme();
          const icon = document.getElementById('darkModeIcon');
          if (icon) {
               icon.classList.remove('bi-moon-stars-fill');
               if (currentTheme === 'dark') {
                    icon.classList.add('bi-moon-stars-fill', 'text-light');
               } else {
                    icon.classList.add('bi-cloud-sun-fill', 'text-dark');
               }
          }
     };
     const toggleTheme = () => {
          const currentTheme = getStoredTheme() || getPreferredTheme();
          const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
          setStoredTheme(newTheme);
          setTheme(newTheme);
          updateDarkModeStatus();
          updateIcon();
     };
     const darkModeToggle = document.getElementById('darkModeToggle');
     if (darkModeToggle) {
          darkModeToggle.addEventListener('click', toggleTheme);
     }
     window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
          const storedTheme = getStoredTheme();
          if (storedTheme !== 'light' && storedTheme !== 'dark') {
               setTheme(getPreferredTheme());
               updateDarkModeStatus();
               updateIcon();
          }
     });
     updateDarkModeStatus();
     updateIcon();
})();