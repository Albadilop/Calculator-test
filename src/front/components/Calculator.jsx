import React, { useState } from 'react';
import { evaluate } from 'mathjs';

export const Calculator = () => {

    const [input, setInput] = useState('0');
    const [calculated, setCalculated] = useState(false)


    const handleClick = (value) => {
        if (input === '0' && value !== '.') {
            setInput(value);
        } else {
            setInput(prevInput => prevInput + value);
        };
        setCalculated(false);
    };

    const handleClear = () => {
        setInput('0');
        setCalculated(false);
    };

    const handleDelete = () => {
        if (input.length === 1) {
            setInput('0');
        } else {
            setInput(prevValue => prevValue.slice(0, -1));
        }
    };

    const handleCalculate = () => {
        try {
            const result = evaluate(input);
            setInput(result.toString());
            setCalculated(true);

        } catch (error) {
            setInput('Error');
            setCalculated(true);

        }
    };

    const handleMultiplication = () => {
        if (!input.includes('*')) {
            setInput(prevInput => prevInput + '*');
        }
    };

    const handleMinus = () => {
        if (!input.includes('-')) {
            setInput(prevInput => prevInput + '-');
        }
    };

    const handleAdd = () => {
        if (!input.includes('+')) {
            setInput(prevInput => prevInput + '+');
        }
    };

    const handleDivision = () => {
        if (!input.includes('/')) {
            setInput(prevInput => prevInput + '/');
        }
    };

    return (
        <div class="card border-0 rounded-4 mt-5 calculator-body">
            <div class="card-body">
                <div class="card border-0 rounded-4 calculator-screen">
                    <div>
                        <h1 className="calculator-result">{input}</h1>
                    </div>

                </div>
                {/* Buttons */}

                <div className="d-flex justify-content-between">
                    {input === '0' || calculated ? (<button onClick={handleClear} type="button" class="btn calculator-buttons other-buttons">AC</button>
                    ) : (
                        <button onClick={handleDelete} type="button" class="btn calculator-buttons other-buttons">
                            <i className="fa-solid fa-delete-left"></i></button>
                    )}
                    <button type="button" class="btn calculator-buttons other-buttons"><i class="fa-solid fa-plus-minus"></i></button>
                    <button onClick={() => handleClick('%')} type="button" class="btn calculator-buttons other-buttons"><i class="fa-solid fa-percent"></i></button>
                    <button onClick={handleDivision} type="button" class="btn calculator-buttons other-buttons"><i class="fa-solid fa-divide"></i></button>
                </div>
                <div className="d-flex justify-content-between">
                    <button onClick={() => handleClick('7')} type="button" class="btn calculator-buttons">7</button>
                    <button onClick={() => handleClick('8')} type="button" class="btn calculator-buttons">8</button>
                    <button onClick={() => handleClick('9')} type="button" class="btn calculator-buttons">9</button>
                    <button onClick={handleMultiplication} type="button" class="btn calculator-buttons other-buttons"><i class="fa-solid fa-xmark"></i></button>
                </div>
                <div className="d-flex justify-content-between">
                    <button onClick={() => handleClick('4')} type="button" class="btn calculator-buttons">4</button>
                    <button onClick={() => handleClick('5')} type="button" class="btn calculator-buttons">5</button>
                    <button onClick={() => handleClick('6')} type="button" class="btn calculator-buttons">6</button>
                    <button onClick={handleMinus} type="button" class="btn calculator-buttons other-buttons"><i class="fa-solid fa-minus"></i></button>
                </div>
                <div className="d-flex justify-content-between">
                    <button onClick={() => handleClick('1')} type="button" class="btn calculator-buttons">1</button>
                    <button onClick={() => handleClick('2')} type="button" class="btn calculator-buttons">2</button>
                    <button onClick={() => handleClick('3')} type="button" class="btn calculator-buttons">3</button>
                    <button onClick={handleAdd} type="button" class="btn calculator-buttons other-buttons"><i class="fa-solid fa-plus"></i></button>
                </div>

                <div className="d-flex justify-content-between">
                    <button onClick={() => handleClick('')} type="button" class="btn calculator-buttons"><i class="fa-solid fa-calculator"></i></button>
                    <button onClick={() => handleClick('0')} type="button" class="btn calculator-buttons">0</button>
                    <button onClick={() => handleClick('.')} type="button" class="btn calculator-buttons">.</button>
                    <button onClick={handleCalculate} type="button" class="btn calculator-buttons equal-button"><i class="fa-solid fa-equals"></i></button>
                </div>
            </div>
        </div>
    );
};