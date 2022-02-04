import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div className="calc-buttons">
        {counter > 0 && (
          <buttonon
            className="more-less_button"
            onClick={() => {
              setCounter(counter - 1);
            }}
          >
            -
          </buttonon>
        )}

        <p className="counter">{counter}</p>

        {counter < 10 && (
          <buttonon
            className="more-less_button"
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            +
          </buttonon>
        )}
      </div>
      <button
        className="reset_button"
        onClick={() => {
          setCounter(counter - 1 * counter);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
