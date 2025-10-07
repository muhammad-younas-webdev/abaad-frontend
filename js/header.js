const mobileButton = document.getElementById("mobile-menu-button");
const navLinks = document.getElementById("nav-links");
const overlay = document.getElementById("menu-overlay");
const languageSelector = document.getElementById("language-selector");
const currentFlag = document.getElementById("current-flag");
const currentLang = document.getElementById("current-lang");
const dropdownLinks = languageSelector.querySelectorAll(".dropdown-menu a");

// Default language (English)
let currentLanguage = "EN";

// --- Mobile menu toggle ---
mobileButton.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  mobileButton.classList.toggle("active");
  overlay.classList.toggle("show");

  if (!navLinks.classList.contains("show")) {
    languageSelector.classList.remove("open");
  }
});

// --- Close menu when clicking overlay ---
overlay.addEventListener("click", () => {
  navLinks.classList.remove("show");
  mobileButton.classList.remove("active");
  overlay.classList.remove("show");
  languageSelector.classList.remove("open");
});

// --- Close menu on resize ---
window.addEventListener("resize", () => {
  if (window.innerWidth > 1341) {
    navLinks.classList.remove("show");
    mobileButton.classList.remove("active");
    overlay.classList.remove("show");
    languageSelector.classList.remove("open");
  }
});

// --- Toggle dropdown (mobile only) ---
languageSelector.addEventListener("click", (e) => {
  if (window.innerWidth <= 1341) {
    if (!e.target.closest(".dropdown-menu")) {
      // e.preventDefault();
      languageSelector.classList.toggle("open");
    }
  }
});
// --- Handle flag and label change only (no text/RTL swap) ---
dropdownLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // e.preventDefault();

    const newFlag = link.getAttribute("data-flag");
    const newLang = link.getAttribute("data-lang");

    currentFlag.src = newFlag;
    currentLang.textContent = newLang;
    languageSelector.classList.remove("open");

    // just visual switch — no language function call
    currentLanguage = newLang;
  });
});
