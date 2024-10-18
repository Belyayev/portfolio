import "./App.css";
import SvgButton from "./components/SvgButton";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contacts from "./pages/Contacts";
import HomeIcon from "./img/Home.svg";
import PortfolioIcon from "./img/Portfolio.svg";
import ResumeIcon from "./img/Resume.svg";
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
            <NavLink to="/resume" onClick={() => setPath("/resume")}>
              <div className="large-menu">
                <SvgButton
                  active={path === "/resume"}
                  color={path === "/resume" ? "lime" : "#2dd5ff"}
                  text="Resume"
                  x={80}
                />
              </div>
              <div className="small-menu">
                <img src={ResumeIcon} alt="resume" />
              </div>
            </NavLink>
            <NavLink to="/portfolio" onClick={() => setPath("/portfolio")}>
              <div className="large-menu">
                <SvgButton
                  active={path === "/portfolio"}
                  color={path === "/portfolio" ? "lime" : "#2dd5ff"}
                  text="Portfolio"
                  x={130}
                />
              </div>
              <div className="small-menu">
                <img src={PortfolioIcon} alt="Portfolio" />
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
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
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
