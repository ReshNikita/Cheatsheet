import React from "react";

const VDOM = ({ info }) => {
  return (
    <section className="section__block">
      <div>
        <p className="section__paragraph">{info}</p>
      </div>
    </section>
  );
};

export default VDOM;