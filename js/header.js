// Hamburger Mobile Menu
const mobileButton = document.getElementById("mobile-menu-button");
const navLinks = document.getElementById("nav-links");

mobileButton.addEventListener("click", () => {
    navLinks.classList.toggle("show"); // Slide in/out
    mobileButton.classList.toggle("active"); // Animate hamburger
});

// Language Dropdown
const languageSelector = document.getElementById("language-selector");
const dropdownMenu = languageSelector.querySelector(".dropdown-menu");
const currentFlag = document.getElementById("current-flag");
const currentLang = document.getElementById("current-lang");

// Mobile: toggle dropdown on click
languageSelector.addEventListener("click", (e) => {
    e.stopPropagation();
    if (window.innerWidth < 768) {
        const isShown = dropdownMenu.style.opacity === "1";
        dropdownMenu.style.opacity = isShown ? 0 : 1;
        dropdownMenu.style.transform = isShown ? "translateY(20px)" : "translateY(0)";
        dropdownMenu.style.pointerEvents = isShown ? "none" : "auto";
    }
});

// Select a language and update current flag + text
dropdownMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const flag = link.getAttribute("data-flag");
        const lang = link.getAttribute("data-lang");

        currentFlag.src = flag;
        currentLang.textContent = lang;

        // Hide dropdown on mobile after selection
        if (window.innerWidth < 768) {
            dropdownMenu.style.opacity = 0;
            dropdownMenu.style.transform = "translateY(20px)";
            dropdownMenu.style.pointerEvents = "none";
        }
    });
});

// Close mobile dropdown if clicked outside
window.addEventListener("click", () => {
    if (window.innerWidth < 768) {
        dropdownMenu.style.opacity = 0;
        dropdownMenu.style.transform = "translateY(20px)";
        dropdownMenu.style.pointerEvents = "none";
    }
});
