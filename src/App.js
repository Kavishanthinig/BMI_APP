import React, { useState } from 'react';
import './App.css'

const App = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");
  const [value, setValue] = useState(null);
  const [errormsg, setErrormsg] = useState("");

  function calculate() {
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);
    if (isValidHeight && isValidWeight) {
      const bmivalue = Number(weight) / (Number(height / 100) * Number(height / 100));
      setValue(bmivalue.toFixed(2));
      if (bmivalue < 19) {
        setResult("UnderWeight");
      } else if (bmivalue >= 19 && bmivalue <= 25) {
        setResult("Normal");
      } else {
        setResult("OverWeight");
      }
    } else {
      setErrormsg("Please Enter a Valid Height and Weight");
    }
  }

  function clear() {
    setHeight("");
    setWeight("");
    setResult("");
    setValue("");
    setErrormsg("");
  }

  return (
    <div className="container">
      <div className="left-section">
        <h2>BMI Calculator</h2>
        <p>{errormsg}</p>
        <div className="input-group">
          <label>Enter Height (cm)</label>
          <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Enter Weight (kg)</label>
          <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
        <button onClick={calculate}>Calculate</button>
        <button onClick={clear}>Clear</button>
      </div>
      <div className="right-section">
        <p className="result-value">{value ? `${value}` : ""}</p>
        <p className="result-status">{result}</p>
        {result === "UnderWeight" && (
          <p className="advice">
            Increase your intake of calorie-dense, nutritious foods and focus on healthy weight gain.
          </p>
        )}
        {result === "Normal" && (
          <p className="advice">
            Maintain your balanced lifestyle with regular exercise and proper nutrition.
          </p>
        )}
        {result === "OverWeight" && (
          <p className="advice">
            Consider portion control, regular cardio, and strength training for a healthier weight.
          </p>
        )}
        
      </div>
    </div>
  );
};

export default App;
