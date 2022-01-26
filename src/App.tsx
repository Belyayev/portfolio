import "./App.css";
import SvgButton from "./components/SvgButton";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Bio from "./pages/Bio";
import Skills from "./pages/Skills";
import Contacts from "./pages/Contacts";
import HomeIcon from "./img/Home.svg";
import ProjectsIcon from "./img/Projects.svg";
import BioIcon from "./img/Bio.svg";
import SkillsIcon from "./img/Skills.svg";
import ContactsIcon from "./img/Contacts.svg";

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
              <div className="large-menu">
                <SvgButton
                  color={path === "/" ? "lime" : "rgb(45, 213, 255)"}
                  text="HOME"
                  x={100}
                />
              </div>
              <div className="small-menu">
                <img src={HomeIcon} alt="Home" />
              </div>
            </NavLink>
            <NavLink to="/projects" onClick={() => setPath("/projects")}>
              <div className="large-menu">
                <SvgButton
                  color={path === "/projects" ? "lime" : "rgb(45, 213, 255)"}
                  text="PROJECTS"
                  x={140}
                />
              </div>
              <div className="small-menu">
                <img src={ProjectsIcon} alt="Projects" />
              </div>
            </NavLink>
            <NavLink to="/bio" onClick={() => setPath("/bio")}>
              <div className="large-menu">
                <SvgButton
                  color={path === "/bio" ? "lime" : "rgb(45, 213, 255)"}
                  text="BIO"
                  x={80}
                />
              </div>
              <div className="small-menu">
                <img src={BioIcon} alt="Bio" />
              </div>
            </NavLink>
            <NavLink to="/skills" onClick={() => setPath("/skills")}>
              <div className="large-menu">
                <SvgButton
                  color={path === "/skills" ? "lime" : "rgb(45, 213, 255)"}
                  text="SKILLS"
                  x={110}
                />
              </div>
              <div className="small-menu">
                <img src={SkillsIcon} alt="Skills" />
              </div>
            </NavLink>
            <NavLink to="/contacts" onClick={() => setPath("/contacts")}>
              <div className="large-menu">
                <SvgButton
                  color={path === "/contacts" ? "lime" : "rgb(45, 213, 255)"}
                  text="CONTACTS"
                  x={120}
                />
              </div>
              <div className="small-menu">
                <img src={ContactsIcon} alt="Contacts" />
              </div>
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
