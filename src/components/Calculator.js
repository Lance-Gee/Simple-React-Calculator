import React from "react";
import { useRef } from "react";
import classes from "./Calculator.module.css";
import { useState } from "react";

function Calculator() {
  const num1 = useRef();
  const num2 = useRef();
  const [isAnswered, setIsAnswered] = useState(0);

  function addition() {
    const num1Entered = num1.current.value;
    const num2Entered = num2.current.value;
    const answer = parseInt(num1Entered) + parseInt(num2Entered);
    setIsAnswered(answer);
  }

  function substraction() {
    const num1Entered = num1.current.value;
    const num2Entered = num2.current.value;
    const answer = parseInt(num1Entered) - parseInt(num2Entered);
    setIsAnswered(answer);
  }

  function multiplication() {
    const num1Entered = num1.current.value;
    const num2Entered = num2.current.value;
    const answer = parseInt(num1Entered) * parseInt(num2Entered);
    setIsAnswered(answer);
  }

  function division() {
    const num1Entered = num1.current.value;
    const num2Entered = num2.current.value;
    const answer = parseInt(num1Entered) / parseInt(num2Entered);
    setIsAnswered(answer);
  }

  return (
    <div>
      <table>
        <tr>
          <td>
            <div>
              <label htmlFor="firstInput" style={{ paddingRight: "20px" }}>
                Number 1
              </label>
              <input type="text" required id="firstInput" ref={num1} />
            </div>
            <div>
              <label htmlFor="secondInput" style={{ paddingRight: "20px" }}>
                Number 2
              </label>
              <input type="text" required id="secondInput" ref={num2} />
            </div>
            <br />
            <div>
              <button className={classes.innerButton} onClick={addition}>
                +
              </button>
              <button className={classes.innerButton} onClick={substraction}>
                -
              </button>
              <button className={classes.innerButton} onClick={multiplication}>
                *
              </button>
              <button className={classes.innerButton} onClick={division}>
                /
              </button>
            </div>
          </td>
          <td className={classes.answer}>{isAnswered}</td>
        </tr>
      </table>
    </div>
  );
}

export default Calculator;
