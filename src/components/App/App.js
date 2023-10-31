import React from "react";
import StylesApp from "./App.module.css";
import Home from "../Home/Home";

const App = () => {
  return (
    <div className={StylesApp.app}>
      <Home />
    </div>
  );
};

export default App;
