import React from "react";

const Context = ({ info }) => {
  return (
    <section className="section__block">
      <div>
        <p className="section__paragraph">{info}</p>
      </div>
    </section>
  );
};

export default Context;
