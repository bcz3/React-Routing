import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {

  useEffect(() => {
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

    return () => {
      menuBtnEl.removeEventListener("click", toggleMenu);
      closeBtnEl.removeEventListener("click", toggleMenu);
      menuLinkEl.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
    <header class="header">
      <nav class="nav">
        <div class="nav__data">
          <NavLink to={"/"}>
            <img src="logon.png" alt="The logo"/>
          </NavLink>
          <div class="nav__toggle">
            <button class="nav__toggle-menu" id="toggle-menu">
              <span></span>
            </button>
            <button class="nav__toggle-close" id="toggle-close">
              <span></span>
            </button>
          </div>
        </div>
        <div class="nav__menu" id="nav-menu">
          <ul class="nav__list" id="nav-list">
            <NavLink to={"/"}>
              <li><a href="#" class="nav__link">Home</a></li>
            </NavLink>
            <NavLink to={"/about"}>
              <li><a href="#" class="nav__link">About</a></li>
            </NavLink>
            <NavLink to={"/contact"}>
              <li><a href="#" class="nav__link">Contact</a></li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
