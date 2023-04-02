import React, { useState } from "react";
import { useParams } from "react-router-dom";
import reactTopics from "./ReactTopics";
import { Button } from "antd";

import "../../Styles/Info.css";

const ReactTopic = ({
  info,
  info2,
  info3,
  info4,
  info5,
  info6,
  code,
  code2,
  code3,
  code4,
  listLifeCycle,
  listLifeCycle2,
}) => {
  const { id } = useParams();
  return (
    <>
      <section className="section__block">
        {reactTopics[id]}
        <div>
          <>{info}</>
          <br />
          {listLifeCycle}
          <br />
          <>{info2}</>
          <br />
          {listLifeCycle2}
          <br />
          <p>{info3}</p>
          <>
            <pre>{info4}</pre>
          </>
          <br />
          <p>{info5}</p>
          <br />
          <code>
            <pre>{code}</pre>
          </code>
          <br />
          <p>{info6}</p>
          <br />
          <code>
            <pre>{code2}</pre>
          </code>
          <br />
          <code>
            <pre>{code3}</pre>
          </code>
          <br />
          <code>
            <pre>{code4}</pre>
          </code>
        </div>
      </section>
    </>
  );
};

export class Counter extends React.Component {
  state = {
    count: 0,
  };
  handleClick = () => {
    this.setState((state) => ({
      count: ++state.count,
    }));
  };

  render() {
    const { count } = this.state;
    return (
      <div className="counter">
        <p>{count}</p>
        <Button onClick={() => this.handleClick()}>Click me</Button>
      </div>
    );
  }
}

export const Counter2 = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => ++prev);
  };
  return (
    <>
      <p>{count}</p>
      <Button onClick={() => handleClick()}>Click here</Button>
    </>
  );
};

export default ReactTopic;
