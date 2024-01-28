import React from "react";
import { useSelector } from "react-redux";

const ClickCounter = () => {
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <h2>Magic counter</h2>
      <p>You clicked {count} times</p>
    </div>
  );
};

export default ClickCounter;
