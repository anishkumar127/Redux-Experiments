import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const counter = useSelector((state) => state.counter);
  // const data = useSelector((state) => state.data);
  // console.log(data);
  const dispatch = useDispatch();
  console.log(counter);
  const add = () => {
    dispatch({ type: "INC" });
  };
  const remove = () => {
    dispatch({ type: "DEC" });
  };
  const addValue = () => {
    dispatch({ type: "addValue", payload: 10 });
  };
  const addPrev = () => {
    dispatch({ type: "addPrev" });
  };
  // useEffect(() => {
  //   console.log("effect running");
  //   dispatch({ type: "preData" });
  // }, [counter]);
  return (
    <div>
      <h1>Counter </h1>
      <h2>{counter}</h2>
      <button onClick={add}>+</button>
      <button onClick={remove}>-</button>
      <button onClick={addValue}>Add Value By 10</button>
      <button onClick={addPrev}>Add Value By Previous Number</button>

      {/* <p>show me previous value {}</p> */}
    </div>
  );
}

export default App;
