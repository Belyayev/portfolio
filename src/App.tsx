import "./App.css";
import SvgButton from "./components/SvgButton";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Bio from "./pages/Bio";
import Skills from "./pages/Skills";
import Contacts from "./pages/Contacts";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";

function App() {
  const [path, setPath] = useState(window.location.pathname);
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <div className="header">
            <NavLink to="/" onClick={() => setPath("/")}>
              <SvgButton
                color={path === "/" ? "red" : "rgb(45, 213, 255)"}
                text="HOME"
                x={100}
              />
            </NavLink>
            <NavLink to="/projects" onClick={() => setPath("/projects")}>
              <SvgButton
                color={path === "/projects" ? "red" : "rgb(45, 213, 255)"}
                text="PROJECTS"
                x={140}
              />
            </NavLink>
            <NavLink to="/bio" onClick={() => setPath("/bio")}>
              <SvgButton
                color={path === "/bio" ? "red" : "rgb(45, 213, 255)"}
                text="BIO"
                x={80}
              />
            </NavLink>
            <NavLink to="/skills" onClick={() => setPath("/skills")}>
              <SvgButton
                color={path === "/skills" ? "red" : "rgb(45, 213, 255)"}
                text="SKILLS"
                x={110}
              />
            </NavLink>
            <NavLink to="/contacts" onClick={() => setPath("/contacts")}>
              <SvgButton
                color={path === "/contacts" ? "red" : "rgb(45, 213, 255)"}
                text="CONTACTS"
                x={120}
              />
            </NavLink>
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
