// document.addEventListener("DOMContentLoaded", function () {
//   const url = window.location.pathname;

//   if (url.includes("/ar/") || url.endsWith("/ar")) {
//     document.body.classList.add("arabic-lang");
//     document.documentElement.setAttribute("dir", "rtl");
//   }
// });
function changeLang() {
  document.body.classList.add("arabic-lang");
  document.documentElement.setAttribute("dir", "rtl");

  document.querySelectorAll("[data-ar-lang]").forEach((el) => {
    const englishText = el.textContent.trim();
    const arabicText = el.getAttribute("data-ar-lang");
    el.setAttribute("data-ar-lang", englishText);
    el.textContent = arabicText;
  });

  document.querySelectorAll("img[data-ar-logo]").forEach((img) => {
    const englishSrc = img.getAttribute("src");
    const arabicSrc = img.getAttribute("data-ar-logo");
    img.setAttribute("data-ar-logo", englishSrc);
    img.setAttribute("src", arabicSrc);
  });

  const currentFlag = document.getElementById("current-flag");
  const currentLang = document.getElementById("current-lang");
  currentFlag.src = "assets/images/flag-ar.svg";
  currentLang.textContent = "AR";
}

// Auto apply Arabic if URL has "/ar/"
document.addEventListener("DOMContentLoaded", function () {
  const url = window.location.pathname;
  if (url.includes("/ar/") || url.endsWith("/ar")) {
    changeLang();
  }
});


changeLang(); 
