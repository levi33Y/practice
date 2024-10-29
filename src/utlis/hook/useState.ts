import { App } from "../../app.jsx";
import React from "../react/index";

export const useState = <T>(initialValue: T) => {
  let state = initialValue;

  const setState = (newValue: T) => {
    state = newValue;

    //触发重新渲染
    React.render(App(), document.getElementById("app"));
  };
  return [state, setState];
};
