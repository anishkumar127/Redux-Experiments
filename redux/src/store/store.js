import { legacy_createStore as createStore } from "redux";

const initial = {
  counter: 0,
  data: 0,
};

const reducerFun = (state = initial, action) => {
  // synchronous function
  // we should not mutate the original state.
  if (action.type === "INC") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "DEC") {
    return { counter: state.counter - 1 };
  }

  if (action.type === "addValue") {
    return {
      counter: state.counter + action.payload,
    };
  }

  if (action.type === "addPrev") {
    return {
      counter: state.counter + state.counter,
    };
  }
  // if (action.type === "preData") {
  //   console.log("state", state.data);
  //   return {
  //     ...state.data,
  //     state:state.data,
  //   };
  // }

  return state;
};
export const store = createStore(reducerFun);
