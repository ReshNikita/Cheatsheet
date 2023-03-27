import React from "react";
import { Link } from "react-router-dom";

import "../../Styles/ReactJS.css";

const ReactJS = () => {
  return (
    <section className="section">
      <h1 className="section__heading">React Section:</h1>
      <ul className="section__list">
        <li>
          <Link to="/introduction">Introduction</Link>
        </li>
        <li>
          <Link to="/components">Components</Link>
        </li>
        <li>
          <Link to="/props">Props</Link>
        </li>
        <li>
          <Link to="/state">State</Link>
        </li>
        <li>
          <Link to="/lifecycle">Lifecycle</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/key">Key</Link>
        </li>
        <li>
          <Link to="/refs">Refs</Link>
        </li>
        <li>
          <Link to="/async">Asynchronous requests</Link>
        </li>
        <li>
          <Link to="/vdom">Virtual DOM</Link>
        </li>
        <li>
          <Link to="/fragment">Fragment</Link>
        </li>
        <li>
          <Link to="/reactmemo">React.memo</Link>
        </li>
        <li>
          <Link to="/useeffect">useEffect</Link>
        </li>
        <li>
          <Link to="/router">Router</Link>
        </li>
        <li>
          <Link to="/context">Context</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
        <li>
          <Link to="/uilibraries">UI Libraries</Link>
        </li>
      </ul>
    </section>
  );
};

export default ReactJS;
