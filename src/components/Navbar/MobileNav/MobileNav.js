import React from "react";
import "./MobileNav.css";
import logo from "../../../assets/images/logo.png";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img className="logo" src={logo} alt="" />

          <ul>
            <li>
              <a href="#home" className="menu-item">
                Home
              </a>
            </li>
            <li>
              <a href="#skills" className="menu-item">
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" className="menu-item">
                Work experience
              </a>
            </li>
            <li>
              <a href="#projects" className="menu-item">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="menu-item">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
