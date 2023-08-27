import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    add(state, action) {
      state = state.counter++; // working
      // state.counter++; // working both way.
    },
    remove(state, action) {
      state.counter--;
    },
    addBy(state, action) {
      state.counter += action.payload;
    },
    addPrev(state,action){
      state.counter +=state.counter
    }
  },
});
export const actions = counterSlice.actions;
const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
