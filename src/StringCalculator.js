import { useState } from "react";
import "./css/StringCalculator.css";

export function calc(input){
  if (input === "") {
    return 0;
  }
  let newString = input.replace("\n",",")
  debugger;
  let NumArr = newString.split(",");
  debugger;
    return NumArr.reduce((sum, num) => {
      if (num.trim() === "") throw new Error("Invalid input");
      return sum + parseInt(num, 10);
    }, 0);
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
    let newString = inputVal.replace("\n",",")
    let NumArr = newString.split(",");
    let resVal = NumArr.reduce((sum, num) => {
      if (num.trim() === "") throw new Error("Invalid input");
      return sum + parseInt(num, 10);
    }, 0);
    
    setresult(resVal);

  };

  const onchangeInput = (e) => {
    setInputVal(e.target.value);
  };

  const resetAll = () => {
    setresult("");
    setInputVal("");
  }

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
