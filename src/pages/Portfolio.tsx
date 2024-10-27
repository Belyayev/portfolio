import prj_1 from "../img/FreeShoppingListLogin.png";
import { CSSProperties } from "react";
import YoutubeEmbed from "../components/YoutubeEmbed";

function Portfolio() {
  return (
    <div>
      <div className="stack" style={{ "--stacks": 3 } as CSSProperties}>
        <span style={{ "--index": 0 } as CSSProperties}>Portfolio</span>
        <span style={{ "--index": 1 } as CSSProperties}>Portfolio</span>
        <span style={{ "--index": 2 } as CSSProperties}>Portfolio</span>
      </div>
      <div className="project-item">
        <div>
          <img className="portfolioImage" src={prj_1} alt="FreeShoppingList" />
        </div>
        <div className="project-text">
          <div>
            Application link:
            <a href="https://freeshoppinglist.vercel.app/" target="blank">
              https://freeshoppinglist.vercel.app/
            </a>
          </div>
          <div>
            Live demo (video):{" "}
            <a href="https://youtu.be/4m1WAmEeqg8" target="blank">
              https://youtu.be/4m1WAmEeqg8
            </a>
          </div>
          <div>
            API (backend):{" "}
            <a
              href="https://github.com/Belyayev/shopping-list-api"
              target="blank"
            >
              https://github.com/Belyayev/shopping-list-api
            </a>
          </div>
          <div>
            UI (frontend):{" "}
            <a
              href="https://github.com/Belyayev/shopping-list-ui"
              target="blank"
            >
              https://github.com/Belyayev/shopping-list-ui
            </a>
          </div>
          <p>
            Free Shopping List is a full-stack web application built on the MERN
            stack. I used Node.js for the backend and React.js for the UI. I
            first created this project in 2022 to solve a real-world problem for
            my family and friends. Exchanging grocery shopping lists via text
            was cumbersome, so I decided to make an app. It is fully responsive,
            designed with mobile users in mind. It includes basic
            authentication, drag-and-drop sorting, list sharing between users,
            and other features.
          </p>
        </div>
      </div>
      <div className="project-item">
        <div className="video-responsive">
          <YoutubeEmbed embedId="kh0QGt24vjA" />
        </div>
        <div className="project-text">
          <div>
            Compiled demo project:{" "}
            <a
              href="https://filedn.com/lsWfTQIKr30JnApFhpa8hNf/Grafton/"
              target="blank"
            >
              Download
            </a>
          </div>
          <div>
            Exterior demo:{" "}
            <a href="https://www.youtube.com/embed/kh0QGt24vjA" target="blank">
              Watch video
            </a>
          </div>
          <div>
            Inerior demo:{" "}
            <a href="https://www.youtube.com/embed/5vY-wobT0yA" target="blank">
              Watch video
            </a>
          </div>
          <p>
            Throughout the years I've tried many styles and applications
            creating visuals. Architectural Vizualization a.k.a. "ArchViz" was
            one of them. Below I present a project that was modeled using
            Blender and rendered in Unreal Engine 5. You can download combiled
            version and walk around the scene as a firt person.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
