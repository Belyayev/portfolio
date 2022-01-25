import "./App.css";
import SvgButton from "./components/SvgButton";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Bio from "./pages/Bio";
import Skills from "./pages/Skills";
import Contacts from "./pages/Contacts";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <div className="header">
            <Link to="/">
              <SvgButton color="rgb(45, 213, 255)" text="HOME" x={100} />
            </Link>
            <Link to="/projects">
              <SvgButton color="rgb(45, 213, 255)" text="PROJECTS" x={140} />
            </Link>
            <Link to="/bio">
              <SvgButton color="rgb(45, 213, 255)" text="BIO" x={80} />
            </Link>
            <Link to="/skills">
              <SvgButton color="rgb(45, 213, 255)" text="SKILLS" x={110} />
            </Link>
            <Link to="/contacts">
              <SvgButton color="rgb(45, 213, 255)" text="CONTACTS" x={120} />
            </Link>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
        <footer>
          <h1 className="text">footer</h1>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
