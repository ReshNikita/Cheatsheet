import React from "react";

import "../../../Styles/Introduction.css";

const Introduction = ({ info }) => {
  return (
    <section className="section__block">
      <div>
        <p className="section__paragraph">{info}</p>
      </div>
    </section>
  );
};

export default Introduction;