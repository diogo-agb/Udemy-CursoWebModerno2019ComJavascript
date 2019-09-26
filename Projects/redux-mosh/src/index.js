import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import Counters from "./components/Counters";

//States control
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import counterReducer from "./components/counterReducer";
import tagsReducer from './components/tagsReducer'

const reducers = combineReducers({
  counter: counterReducer,
  tag: tagsReducer
});

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Counters />
  </Provider>,

  document.getElementById("root")
);
