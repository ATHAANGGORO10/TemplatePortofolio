// Toggler-DarkMode-Theme
if (localStorage.getItem("theme") === "dark") {
     document.body.classList.add("dark-mode");
}

// DarkMode-Android
document.getElementById("darkModeToggle").addEventListener("click", function () {
     document.body.classList.toggle("dark-mode");
     if (document.body.classList.contains("dark-mode")) {
          localStorage.setItem("theme", "light");
     } else {
          localStorage.setItem("theme", "dark");
     }
     const icon = darkModeToggle.querySelector('.material-symbols-outlined');
     if (document.body.classList.contains('dark-mode')) {
          icon.textContent = 'mode_night'; // Gelap
     } else {
          icon.textContent = 'light_mode'; // Siang
     }
});

// DarkMode-PC dan Laptop
document.getElementById("lightModeToggler").addEventListener("click", function () {
     document.body.classList.toggle("dark-mode");
     if (document.body.classList.contains("dark-mode")) {
          localStorage.setItem("theme", "light");
     } else {
          localStorage.setItem("theme", "dark");
     }
     const icon = lightModeToggler.querySelector('.material-symbols-outlined');
     if (document.body.classList.contains('dark-mode')) {
          icon.textContent = 'mode_night'; // Gelap
     } else {
          icon.textContent = 'light_mode'; // Siang
     }
});
