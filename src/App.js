import "./App.css";

import Header from "./components/Header";
import Counter from "./components/Counter";
import Footer from "./components/Footer";

import { useState } from "react";

function App() {
  // const [tab, setTab] = useState([<Counter />]);
  const [counters, setCounters] = useState([0]);

  const handleClick = () => {
    // Créer une copie de tab
    const newCounters = [...counters];
    // Modifier la copie
    newCounters.push(0);
    // Mettre à jour l'état avec la copie
    setCounters(newCounters);
    // Les fonctions qui mettent à jour un état sont ASYNCHRONES
    // console.log("Tab ====> ", tab);

    // console.log("test");
  };

  return (
    <div className="App">
      <Header />

      <main>
        <button onClick={handleClick}>Add counter</button>

        <div className="counters_div">
          {counters.map((counter, index) => {
            //[0,0,0]
            // quand c'est le premier  counter, index 0,
            return (
              index < 3 && (
                <p>
                  {
                    <Counter
                      counter={counter}
                      more={() => {
                        counter + 1;
                      }}
                      less={() => {
                        counter - 1;
                      }}
                      reset={() => {
                        counter - 1 * counter;
                      }}
                      key={index}
                    />
                  }
                </p>
              )
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
