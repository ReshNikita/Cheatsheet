import React from "react";

const Props = () => {
  return (
    <section className="section__block">
      <div>
        <p className="section__paragraph">
          Компоненты позволяют разбить интерфейс на независымые части, про
          которые легко думать в отдельности. Они во многом ведут себя как
          обычные функции JS. Они принимают произвольные входные данные -{" "}
          <strong> пропсы (props) </strong> и возвращают React-элементы,
          описывающие, что мы хотим увидеть на экране.
        </p>
      </div>
    </section>
  );
};

export default Props;
