import React from "react";
import { Link } from "react-router-dom";

import logo from "../logo.svg";

import "../Styles/Home.css";

const Home = () => {
  return (
    <div>
      <header className="app-header">
        <Link to="/" className="material-symbols-outlined">
          home
        </Link>
        <h1 className="app-heading">Front-end cheatsheet</h1>
        <img src={logo} className="app-logo" alt="logo" />
      </header>
    </div>
  );
};

export default Home;
