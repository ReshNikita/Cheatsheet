import React from "react";
import { Link } from "react-router-dom";

import "../Styles/GlowingButton.css";

const GlowingButton = () => {
  return (
    <div className="block">
      <Link to="/html" className="glowing-btn">
        <span className="glowing-txt">
          S<span className="faulty-letter">T</span>ART LEARNING NOW
        </span>
      </Link>
    </div>
  );
};

export default GlowingButton;
