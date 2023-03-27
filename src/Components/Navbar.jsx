import React from "react";
import { NavLink } from "react-router-dom";

import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li>
          <NavLink to="/html">HTML</NavLink>
        </li>
        <li>
          <NavLink to="/css">CSS</NavLink>
        </li>
        <li>
          <NavLink to="/js">JavaScript</NavLink>
        </li>
        <li>
          <NavLink to="/reactjs">React</NavLink>
        </li>
        <li>
          <NavLink to="/redux">Redux</NavLink>
        </li>
        <li>
          <NavLink to="/ts">TypeScript</NavLink>
        </li>
        <li>
          <NavLink to="/other">Other</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
