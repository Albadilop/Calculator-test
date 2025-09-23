import React, { useState } from 'react';
import { evaluate } from 'mathjs';

export const Calculator = () => {

    const [input, setInput] = useState('');

    const handleClick = (value) => {
        setInput(prevInput => prevInput + value);
    };

    const handleClear = () => {
        setInput('');
    };

    const handleDelete = () => {
        setInput(prevValue => prevValue.slice(0, -1));
    
    };

const handleCalculate = () => {
    try {
      const result = evaluate(input); 
      setInput(result.toString()); 
    } catch (error) {
      setInput('Error');
    }
  };

    return (
        <div class="card border-0 rounded-4 calculator-body">
            <div class="card-body">
                <div class="card border-0 rounded-4 calculator-screen">
                    <div className="d-flex">
                        <h1 className="calculator-result text-white">{input}</h1>
                    </div>

                </div>
                {/* Buttons */}

                <div className="d-flex justify-content-between">
                    {input === '' ? (<button onClick={handleClear} type="button" class="btn calculator-buttons other-buttons">A</button>
                    ) : (
                        <button onClick={handleDelete} type="button" class="btn calculator-buttons other-buttons">
                            <i className="fa-solid fa-delete-left"></i></button>
                    )}
                    <button onClick={() => handleClick('-')} type="button" class="btn calculator-buttons other-buttons">-</button>
                    <button onClick={() => handleClick('%')} type="button" class="btn calculator-buttons other-buttons">%</button>
                    <button onClick={() => handleClick('/')} type="button" class="btn calculator-buttons other-buttons">/</button>
                </div>
                <div className="d-flex justify-content-between">
                    <button onClick={() => handleClick('7')} type="button" class="btn calculator-buttons">7</button>
                    <button onClick={() => handleClick('8')} type="button" class="btn calculator-buttons">8</button>
                    <button onClick={() => handleClick('9')} type="button" class="btn calculator-buttons">9</button>
                    <button onClick={() => handleClick('X')} type="button" class="btn calculator-buttons other-buttons">X</button>
                </div>
                <div className="d-flex justify-content-between">
                    <button onClick={() => handleClick('4')} type="button" class="btn calculator-buttons">4</button>
                    <button onClick={() => handleClick('5')} type="button" class="btn calculator-buttons">5</button>
                    <button onClick={() => handleClick('6')} type="button" class="btn calculator-buttons">6</button>
                    <button onClick={() => handleClick('-')} type="button" class="btn calculator-buttons other-buttons">-</button>
                </div>
                <div className="d-flex justify-content-between">
                    <button onClick={() => handleClick('1')} type="button" class="btn calculator-buttons">1</button>
                    <button onClick={() => handleClick('2')} type="button" class="btn calculator-buttons">2</button>
                    <button onClick={() => handleClick('3')} type="button" class="btn calculator-buttons">3</button>
                    <button onClick={() => handleClick('+')} type="button" class="btn calculator-buttons other-buttons">+</button>
                </div>

                <div className="d-flex justify-content-between">
                    <button onClick={() => handleClick('-')} type="button" class="btn calculator-buttons"><i class="fa-solid fa-calculator"></i></button>
                    <button onClick={() => handleClick('0')} type="button" class="btn calculator-buttons">0</button>
                    <button onClick={() => handleClick('.')} type="button" class="btn calculator-buttons">.</button>
                    <button onClick={handleCalculate} type="button" class="btn calculator-buttons equal-button">=</button>
                </div>
            </div>
        </div>
    );
};