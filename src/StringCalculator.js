import { useState } from "react";
import "./css/StringCalculator.css";

export function calc(input) {
  if (input === "") {
    return 0;
  }
  let NumArr = input.split(/[\n,]+/);
  if (NumArr.includes(NaN) || input.endsWith(",") || input.endsWith("\n")) {
    throw new Error("Invalid input");
  }
  let sum = NumArr.reduce((total, num) => total + parseInt(num), 0);
  return sum;
}

export function StringCalculator(input) {
  const [inputVal, setInputVal] = useState("");
  const [result, setresult] = useState("");

  const calculate = () => {
    if (inputVal === "") {
      setresult(0);
      calc(inputVal);
      return 0;
    }
    calc(inputVal);
    let NumArr = inputVal.split(/[\n,]+/);
    let sum = NumArr.reduce((total, num) => total + parseInt(num), 0);
    setresult(sum);
    return sum;
  };

  const onchangeInput = (e) => {
    setInputVal(e.target.value);
  };

  const resetAll = () => {
    setresult("");
    setInputVal("");
  };

  return (
    <div className="StringCalculator_outer">
      <div className="formWrap">
        <div className="head">String Calculator</div>
        <div className="body">
          <input
            placeholder="Enter your input here"
            value={inputVal}
            onChange={onchangeInput}
          />
          <div className="buttonwrap">
            <button onClick={calculate}>Submit value</button>
            <button onClick={resetAll}>Reset</button>
          </div>
          <div className="ansRow">
            <b>{result}</b>
          </div>
        </div>
      </div>
    </div>
  );
}
