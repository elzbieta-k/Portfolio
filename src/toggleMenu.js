function toggleMenu() {
  const hamburger = document.querySelector("#hamburger");
  const navMenu = document.querySelector(".nav-menu-div");

  const isOpen = navMenu.classList.toggle("open");

  hamburger.classList.toggle("active", isOpen);
  hamburger.setAttribute("aria-expanded", isOpen);
}

export default toggleMenu;
