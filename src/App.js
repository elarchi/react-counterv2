import "./App.css";

import Header from "./components/Header";
import Counter from "./components/Counter";
import Footer from "./components/Footer";

import { useState } from "react";

function App() {
  const [tab, setTab] = useState([<Counter />]);
  // const [counter, setCounter] = useState(0);

  const handleClick = () => {
    // Créer une copie de tab
    const newTab = [...tab];
    // Modifier la copie
    newTab.push(<Counter />);
    // Mettre à jour l'état avec la copie
    setTab(newTab);
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
          {tab.map((elem, index) => {
            return index < 3 && <p>{elem}</p>;
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
