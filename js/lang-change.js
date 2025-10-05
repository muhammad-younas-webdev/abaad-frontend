// document.addEventListener("DOMContentLoaded", function () {
//   const url = window.location.pathname;

//   if (url.includes("/ar/") || url.endsWith("/ar")) {
//     document.body.classList.add("arabic-lang");
//     document.documentElement.setAttribute("dir", "rtl");
//   }
// });

function changeLang() {
  // Add Arabic class and RTL direction
  document.body.classList.add("arabic-lang");
  document.documentElement.setAttribute("dir", "rtl");

  // 🔹 Swap English ↔ Arabic text for all elements
  document.querySelectorAll("[data-ar-lang]").forEach((el) => {
    const englishText = el.textContent.trim();
    const arabicText = el.getAttribute("data-ar-lang");
    el.setAttribute("data-ar-lang", englishText);
    el.textContent = arabicText;
  });

  // 🔹 Swap all images that have Arabic versions
  document.querySelectorAll("img[data-ar-logo]").forEach((img) => {
    const englishSrc = img.getAttribute("src");
    const arabicSrc = img.getAttribute("data-ar-logo");
    img.setAttribute("data-ar-logo", englishSrc);
    img.setAttribute("src", arabicSrc);
  });
}

// Auto-apply if URL contains "/ar/"
document.addEventListener("DOMContentLoaded", function () {
  const url = window.location.pathname;
  if (url.includes("/ar/") || url.endsWith("/ar")) {
    changeLang();
  }
});


changeLang(); 
