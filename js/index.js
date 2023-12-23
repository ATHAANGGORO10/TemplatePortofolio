// Toggler-DarkMode-Theme
if (localStorage.getItem("theme") === "?") {
     document.body.classList.add("dark-mode");
     document.body.classList.add("light-mode");
}

// DarkMode-Android
document.getElementById("darkModeToggle").addEventListener("click", () => {
     document.body.classList.toggle("dark-mode");
     if (document.body.classList.contains("dark-mode")) {
          localStorage.setItem("?", "light");
     } else {
          localStorage.setItem("?", "dark");
     }
     const icon = darkModeToggle.querySelector('.material-symbols-outlined');
     if (document.body.classList.contains('dark-mode')) {
          icon.textContent = 'mode_night'; // Gelap
     } else {
          icon.textContent = 'light_mode'; // Siang
     }
});

// DarkMode-PC dan Laptop
document.getElementById("lightModeToggler").addEventListener("click", () => {
     document.body.classList.toggle("light-mode");
     if (document.body.classList.contains("light-mode")) {
          localStorage.setItem("?", "light");
     } else {
          localStorage.setItem("?", "dark");
     }
     const icon = lightModeToggler.querySelector('.material-symbols-outlined');
     if (document.body.classList.contains('light-mode')) {
          icon.textContent = 'mode_night'; // Gelap
     } else {
          icon.textContent = 'light_mode'; // Siang
     }
});