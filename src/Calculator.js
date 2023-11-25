import React, { useState } from 'react';
import './styles.css'; // Make sure to have your CSS file in the correct directory

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');

  const appendToDisplay = (value) => {
    setDisplayValue((prevValue) =>
      prevValue === '0' ? String(value) : prevValue + value
    );
  };

  const clearDisplay = () => {
    setDisplayValue('0');
  };

  const calculateResult = () => {
    try {
      const result = eval(displayValue);
      setDisplayValue(String(result));
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display" id="display">
        {displayValue}
      </div>
      <div className="buttons">
        <button onClick={() => appendToDisplay('7')}>7</button>
        <button onClick={() => appendToDisplay('8')}>8</button>
        <button onClick={() => appendToDisplay('9')}>9</button>
        <button onClick={() => appendToDisplay('+')}>+</button>
        {/* ...rest of the buttons with respective onClick handlers */}
        <button onClick={clearDisplay}>C</button>
        <button onClick={() => appendToDisplay('0')}>0</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => appendToDisplay('/')}>/</button>
      </div>
    </div>
  );
};

export default Calculator;
