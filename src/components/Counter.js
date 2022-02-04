import { useState } from "react";

const Counter = ({ counter, setCounter, more, less, reset }) => {
  //   const [counter, setCounter] = useState(0);

  //   const handleClickMore = () => {
  //     // Créer une copie de tab
  //       const newCounters = [...counters];
  //       newCounters.map((elem, index) => {
  //         newCounters[index]++;
  //       }
  //     // Modifier la copie

  //     // Mettre à jour l'état avec la copie
  //     setCounters(newCounters);
  //     // Les fonctions qui mettent à jour un état sont ASYNCHRONES
  //     // console.log("Tab ====> ", tab);

  //     // console.log("test");
  //   };

  //   const handleClickLess = () => {
  //     // Créer une copie de tab
  //     const newCounters = [...counters];
  //     // Modifier la copie
  //     newCounters.push(0);
  //     // Mettre à jour l'état avec la copie
  //     setCounters(newCounters);
  //     // Les fonctions qui mettent à jour un état sont ASYNCHRONES
  //     // console.log("Tab ====> ", tab);

  //     // console.log("test");
  //   };

  return (
    <div>
      <div className="calc-buttons">
        {counter > 0 && (
          <button className="more-less_button" onClick={more()}>
            -
          </button>
        )}

        <p className="counter">{counter}</p>

        {counter < 10 && (
          <button
            className="more-less_button"
            // onClick={() => {
            //   setCounter(counter + 1);
            // }}
            onClick={less()}
          >
            +
          </button>
        )}
      </div>
      <button className="reset_button" onClick={reset()}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
