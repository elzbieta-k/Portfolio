import "./style.css";
import toggleMenu from "./toggleMenu";
import toggleTheme from "./toggleTheme";
import updateText from "./updateText";

const themeBtn = document.querySelector("#theme-toggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.dataset.theme = "dark";
}
const hamburger = document.querySelector("#hamburger");
hamburger.addEventListener("click", toggleMenu);

themeBtn.addEventListener("click", toggleTheme);

let currentLang = localStorage.getItem("lang") || "no";

document.querySelectorAll("[data-lang]").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    currentLang = e.target.dataset.lang;
    localStorage.setItem("lang", currentLang);
    updateText(currentLang);
  });
});
