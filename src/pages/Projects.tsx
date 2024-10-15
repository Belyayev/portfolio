import prj_1 from "../img/FreeShoppingListLogin.png";
import { CSSProperties } from "react";

function Projects() {
  return (
    <div>
      <div className="stack" style={{ "--stacks": 3 } as CSSProperties}>
        <span style={{ "--index": 0 } as CSSProperties}>My Projects</span>
        <span style={{ "--index": 1 } as CSSProperties}>My Projects</span>
        <span style={{ "--index": 2 } as CSSProperties}>My Projects</span>
      </div>
      <div className="project-item">
        <img width="200" height="200" src={prj_1} alt="FreeShoppingList" />
        <div className="project-text">
          <div>
            Live demo (production):{" "}
            <a href="https://freeshoppinglist.vercel.app" target="blank">
              https://freeshoppinglist.vercel.app
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
        {/* <div className="project-image">image</div> */}
        <div className="project-text">
          <p>
            The next project was written in C# with Windows forms. This is basic
            "Paint"-like application that supports touch screen. It is easier to
            use for small children with all tools accessible on the screen by
            single click or touch. In full screen mode this application hides
            all other windows, so you don't need to worry about kids opening
            other things while drawing on your PC.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
