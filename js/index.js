(() => {
     'use strict'; // Button Mode Dark - Light Start
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
     }; // Button Mode Dark - Light End
     const updateIcon = () => { // Button Icons Click Start
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
          updateHomeBackground(newTheme);
          updateAboutBackground(newTheme);
          updateWorksBackground(newTheme);
     };
     const updateHomeBackground = theme => {
          const homeSection = document.querySelector('.home');
          if (homeSection) {
               homeSection.style.backgroundColor = theme === 'dark' ? '#343a40' : 'beige';
          }
     };
     const updateAboutBackground = theme => {
          const profileSection = document.querySelector('.about');
          if (profileSection) {
               profileSection.style.backgroundColor = theme === 'dark' ? '#343a40' : 'beige';
          }
     };
     const updateWorksBackground = theme => {
          const worksSection = document.querySelector('.works');
          if (worksSection) {
               worksSection.style.backgroundColor = theme === 'dark' ? '#343a40' : 'beige';
          }
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
               updateHomeBackground(getPreferredTheme());
               updateAboutBackground(getPreferredTheme());
               updateWorksBackground(getPreferredTheme());
          }
     });
     updateDarkModeStatus();
     updateIcon();
     updateHomeBackground(getStoredTheme() || getPreferredTheme());
     updateAboutBackground(getStoredTheme() || getPreferredTheme());
     updateWorksBackground(getStoredTheme() || getPreferredTheme());
     setTimeout(() => { // Screen Loading Start
          const loadingOverlay = document.getElementById('loadingOverlay');
          if (loadingOverlay) {
               loadingOverlay.remove();
               document.body.classList.remove('loading-overlay-active');
          }
     }, 955);
     document.body.classList.add('loading-overlay-active');
})();
let lastScrollTop = 0;
window.addEventListener("scroll", function () {
     let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
     let navbar = document.getElementById("navbar");
     if (currentScroll > lastScrollTop) {
          navbar.style.transform = "translateY(-100%)";
     } else {
          navbar.style.transform = "translateY(0)";
     }
     lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
