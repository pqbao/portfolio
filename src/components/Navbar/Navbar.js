import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import MobileNav from "./MobileNav/MobileNav";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <div className="logo-box">
            <img className="logo" src={logo} alt="" />
            <span>BAODEV</span>
          </div>
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
          <button className="menu-btn" onClick={toggleMenu}>
            <span className="material-icons" style={{ fontSize: "1.8rem" }}>
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
