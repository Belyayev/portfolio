import "./App.css";
import SvgButton from "./components/SvgButton";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Bio from "./pages/Bio";
import ArchViz from "./pages/ArchViz";
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
                  text="Home"
                  x={90}
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
                  text="My Projects"
                  x={130}
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
                  text="Bio"
                  x={80}
                />
              </div>
              <div className="small-menu">
                <img src={BioIcon} alt="Bio" />
              </div>
            </NavLink>
            <NavLink to="/archviz" onClick={() => setPath("/archviz")}>
              <div className="large-menu">
                <SvgButton
                  active={path === "/archviz"}
                  color={path === "/archviz" ? "lime" : "#2dd5ff"}
                  text="Arch.Viz"
                  x={110}
                />
              </div>
              <div className="small-menu">
                <img src={SkillsIcon} alt="ArchViz" />
              </div>
            </NavLink>
            <NavLink to="/contacts" onClick={() => setPath("/contacts")}>
              <div className="large-menu">
                <SvgButton
                  active={path === "/contacts"}
                  color={path === "/contacts" ? "lime" : "#2dd5ff"}
                  text="Contacts"
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
            <Route path="/archviz" element={<ArchViz />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
        <footer>
          <div className="footer">
            <div>
              <IoHome />
              Calgary, Canada
            </div>
            <div>
              <MdMarkEmailRead style={{ marginLeft: "1.5rem" }} />
              mike.x.coder@gmail.com
            </div>
          </div>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
