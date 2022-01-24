import React from "react";
import "./App.css";
import SvgButton from "./components/SvgButton";

function App() {
  return (
    <div className="App">
      <header>
        <div className="header">
          <SvgButton color="rgb(45, 213, 255)" text="HOME" x={110} />
          <SvgButton color="rgb(45, 213, 255)" text="PROJECTS" x={140} />
          <SvgButton color="rgb(45, 213, 255)" text="ABOUT" x={110} />
          <SvgButton color="rgb(45, 213, 255)" text="CONTACT" x={120} />
        </div>
      </header>
      <main>
        <h1 className="text">main section</h1>
        <h1 className="text">main section</h1>
      </main>
      <footer>
        <div className="footer">
          <h1 className="text">footer</h1>
        </div>
      </footer>
    </div>
  );
}

export default App;
