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
import { IoHome } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";

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
                  active={path === "/"}
                  color={path === "/" ? "lime" : "#2dd5ff"}
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
                  active={path === "/projects"}
                  color={path === "/projects" ? "lime" : "#2dd5ff"}
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
                  active={path === "/bio"}
                  color={path === "/bio" ? "lime" : "#2dd5ff"}
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
                  active={path === "/skills"}
                  color={path === "/skills" ? "lime" : "#2dd5ff"}
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
                  active={path === "/contacts"}
                  color={path === "/contacts" ? "lime" : "#2dd5ff"}
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
          <span style={{ marginRight: "1.5rem" }}>
            <IoHome /> Calgary, AB, Canada
          </span>
          <span>
            <MdMarkEmailRead /> mike.x.coder@gmail.com
          </span>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
