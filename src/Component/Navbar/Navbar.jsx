import React, { useState } from 'react'
import navcss from './Navbar.module.css';
import logo from '../../starter-code/assets/shared/logo.svg'
import { NavLink } from 'react-router-dom';
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className={navcss.desktop}>
        <nav className={navcss.logo}>
          <img src={logo} alt="logo" />
        </nav>
        <nav className={navcss.headerlinks} aria-label="header links">
          <ul>
            <li id="nlinks">
              <NavLink activeclassname="active" to="/">
                <strong>00</strong>HOME
              </NavLink>
            </li>
            <li id="nlinks">
              <NavLink activeclassname="active-links" to="/destination">
                <strong>01</strong>DESTINATION
              </NavLink>
            </li>
            <li id="nlinks">
              <NavLink activeclassname="active-links" to="crew">
                <strong>02</strong>CREW
              </NavLink>
            </li>
            <li id="nlinks">
              <NavLink activeclassname="active-links" to="technology">
                <strong>03</strong>TECHNOLOGY
              </NavLink>
            </li>
          </ul>
        </nav>
      </nav>
      <nav className={navcss.mobile}>
        <nav className={navcss.logo}>
          <img src={logo} alt="logo" />
        </nav>
        <nav className={`stairs-hamburger-menu ${menuOpen ? "open" : ""}`}>
          <div className="hamburger-button" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div
            className={`menu-overlay ${menuOpen ? "show" : ""}`}
            onClick={toggleMenu}
          ></div>
          <nav className={`menu ${menuOpen ? "open" : ""}`}>
            <ul>
              <li id="nlinks">
                <NavLink
                  activeclassname="active-links"
                  to="/"
                  onClick={toggleMenu}
                >
                  <strong>00</strong>HOME
                </NavLink>
              </li>
              <li id="nlinks">
                <NavLink
                  activeclassname="active-links"
                  to="/destination"
                  onClick={toggleMenu}
                >
                  <strong>01</strong>DESTINATION
                </NavLink>
              </li>
              <li id="nlinks">
                <NavLink
                  activeclassname="active-links"
                  to="/crew"
                  onClick={toggleMenu}
                >
                  <strong>02</strong>CREW
                </NavLink>
              </li>
              <li id="nlinks">
                <NavLink
                  activeclassname="active-links"
                  to="/technology"
                  onClick={toggleMenu}
                >
                  <strong>03</strong>TECHNOLOGY
                </NavLink>
              </li>
            </ul>
          </nav>
        </nav>
      </nav>
    </header>
  );
}

export default Navbar
