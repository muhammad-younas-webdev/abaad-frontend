// document.addEventListener("DOMContentLoaded", function () {
//   const url = window.location.pathname;

//   if (url.includes("/ar/") || url.endsWith("/ar")) {
//     document.body.classList.add("arabic-lang");
//     document.documentElement.setAttribute("dir", "rtl");
//   }
// });

function changeLang() {
  // add arabic class and rtl
  document.body.classList.add("arabic-lang");
  document.documentElement.setAttribute("dir", "rtl");

  // swap text with arabic
  document.querySelectorAll("[data-ar-lang]").forEach((el) => {
    const englishText = el.textContent.trim(); // current visible text
    const arabicText = el.getAttribute("data-ar-lang"); // from attribute

    // put english back into attr
    el.setAttribute("data-ar-lang", englishText);

    // replace content with arabic
    el.textContent = arabicText;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const url = window.location.pathname;

  if (url.includes("/ar/") || url.endsWith("/ar")) {
    changeLang();
  }
});

changeLang();
