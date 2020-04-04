import React from "react";
import useCounter from "../hooks/useCounter";

const Counter = () => {
  const { count, onIncrease, onDecrease, onIncreaseBy } = useCounter();
  return (
    <div style={{ marginTop: "40px" }}>
      <h4>Tutorial Redux</h4>
      <h5>{count}</h5>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={() => onIncreaseBy(5)}>+5</button>
    </div>
  );
};

export default Counter;
