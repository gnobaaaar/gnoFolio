import React from "react";
import "./header.styles.scss";
import Headroom from "react-headroom";

function Header() {
  return (
    <Headroom>
      <header className="header">
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#certificate">Certifications</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#footer">Contact Me</a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;
