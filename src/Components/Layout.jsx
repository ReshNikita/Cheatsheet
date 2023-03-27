import React from "react";
import { Outlet } from "react-router-dom";
import "../Styles/App.css";

const Layout = () => {
  return (
    <main className="App">
      <Outlet />
    </main>
  );
};

export default Layout;
