import React from "react";

const Components = () => {
  return (
    <section className="section__block">
      <div>
        <div className="section__paragraph">
          <p>
            Компоненты React — это многократно иcпользуемые фрагменты
            JavaScript-кода, которые выводят HTML-элементы (благодаря JSX ).
          </p>
          <br />
          <p>Компоненты бывают функциональные и классовые.</p>
          <br />
          <code>
            <pre>{`const functionalComponent = () => {
    return <h1>Привет, мир! </h1> 
};`}</pre>
          </code>
          <br />
          <code>
            <pre>{`class classComponent extends React.Component {
    render() {
      return <h1>Привет, мир!</h1>;
    }
}`}</pre>
          </code>
        </div>
      </div>
    </section>
  );
};

export default Components;
