// import { createStore } from "redux";
// import reducer from "./reducer";

// let store = createStore(reducer);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import contactReducer from './contactSlice';

export const store = configureStore({
  reducer: {
    contact: contactReducer,
  }
})