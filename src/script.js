(() => {
  const bodyEl = document.querySelector("#body");
  const menuBtnEl = document.querySelector(".nav__toggle-menu");
  const closeBtnEl = document.querySelector(".nav__toggle-close");
  const menuContainerEl = document.querySelector("#nav-menu");
  const menuLinkEl = document.querySelector("#nav-list");
  
  const toggleMenu = () => {
    if (window.innerWidth <= 767) {
      bodyEl.classList.toggle("ovh");
      menuBtnEl.classList.toggle("show-icon");
      closeBtnEl.classList.toggle("show-icon");
      menuContainerEl.classList.toggle("show-menu");
    }
  };
  
  menuBtnEl.addEventListener("click", toggleMenu);
  closeBtnEl.addEventListener("click", toggleMenu);
  menuLinkEl.addEventListener("click", toggleMenu);
})();