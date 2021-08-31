import "./App.css";
import React from "react";
import Map from "./Components/map1";
import { VacProvider } from "./Context/VacContext";
import { CoorProvider } from "./Context/CoorContext";

function App() {
  return (
    <div className="App">
      <VacProvider>
        <CoorProvider>
          <Map />
        </CoorProvider>
      </VacProvider>
    </div>
  );
}

export default App;
