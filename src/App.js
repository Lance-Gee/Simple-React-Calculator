import Calculator from "./components/Calculator";
import React from "react";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.center}>
      <h1 className={classes.textCenter}>My Calculator App</h1>
      <Calculator />
    </div>
  );
}

export default App;
