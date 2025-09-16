import { translations } from "./translations";

function updateText(currentLang) {
  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.dataset.key;
    el.textContent = translations[currentLang][key];
  });
}

export default updateText;
