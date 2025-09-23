export const CalculatorFrame = () => {

    return (
        <div class="card border-0 rounded-4 calculator-body">
            <div class="card-body">
                <div class="card border-0 rounded-4 calculator-screen">
                    <div className="d-flex justify-content-end ">
                        <h1 className="calculator-result text-white">453450</h1>
                    </div>

                </div>
                {/* Buttons */}

                <div className="d-flex justify-content-between">
                    <button type="button" class="btn calculator-buttons other-buttons">A</button>
                    {/* <button type="button" class="btn calculator-buttons other-buttons">
                        <i className="fa-solid fa-delete-left"></i></button> */}
                    <button type="button" class="btn calculator-buttons other-buttons">-</button>
                    <button type="button" class="btn calculator-buttons other-buttons">%</button>
                    <button type="button" class="btn calculator-buttons other-buttons">/</button>
                </div>
                <div className="d-flex justify-content-between">
                    <button type="button" class="btn calculator-buttons">7</button>
                    <button type="button" class="btn calculator-buttons">8</button>
                    <button type="button" class="btn calculator-buttons">9</button>
                    <button type="button" class="btn calculator-buttons other-buttons">X</button>
                </div>
                <div className="d-flex justify-content-between">
                    <button type="button" class="btn calculator-buttons">4</button>
                    <button type="button" class="btn calculator-buttons">5</button>
                    <button type="button" class="btn calculator-buttons">6</button>
                    <button type="button" class="btn calculator-buttons other-buttons">-</button>
                </div>
                <div className="d-flex justify-content-between">
                    <button type="button" class="btn calculator-buttons">1</button>
                    <button type="button" class="btn calculator-buttons">2</button>
                    <button type="button" class="btn calculator-buttons">3</button>
                    <button type="button" class="btn calculator-buttons other-buttons">+</button>
                </div>

                <div className="d-flex justify-content-between">
                    <button type="button" class="btn calculator-buttons"><i class="fa-solid fa-calculator"></i></button>
                    <button type="button" class="btn calculator-buttons">0</button>
                    <button type="button" class="btn calculator-buttons">.</button>
                    <button type="button" class="btn calculator-buttons equal-button">=</button>
                </div>
            </div>
        </div>
    );
};