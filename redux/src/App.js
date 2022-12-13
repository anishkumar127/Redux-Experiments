import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store/store";
function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log(counter);
  const add = () => {
    dispatch(actions.add());
  };
  const remove = () => {
    dispatch(actions.remove());
  };
  const addValue = () => {
    dispatch(actions.addBy(10));
  };
  const addPrev = () => {
    dispatch(actions.addPrev());
  };

  return (
    <div>
      <h1>Counter </h1>
      <h2>{counter}</h2>
      <button onClick={add}>+</button>
      <button onClick={remove}>-</button>
      <button onClick={addValue}>Add Value By 10</button>
      <button onClick={addPrev}>Add Value By Previous Number</button>
    </div>
  );
}

export default App;
