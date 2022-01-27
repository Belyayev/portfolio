import { useEffect } from "react";
import SVGDialCircle from "../components/SvgDialCircle";

function Skills() {
  let controller = [true];
  useEffect(() => {
    for (let i = 0; i < 13; i++) {
      setTimeout(() => {
        controller.push(true);
      }, 500);
    }
  }, []);

  {
    console.log(controller);
  }
  return (
    <>
      <h2>My skills level at different technologies:</h2>
      <div className="skills">
        {controller[0] && (
          <div id="card-1">
            <SVGDialCircle color="#2dd5ff" text="HTML" value={94} />
          </div>
        )}
        {controller[1] && (
          <div id="card-2">
            <SVGDialCircle color="#2dd5ff" text="CSS" value={92} />
          </div>
        )}
        {controller[2] && (
          <div id="card-3">
            <SVGDialCircle color="#2dd5ff" text="JavaScript" value={77} />
          </div>
        )}
        <div id="card-4">
          <SVGDialCircle color="#2dd5ff" text="React" value={80} />
        </div>
        <div id="card-5">
          <SVGDialCircle color="#2dd5ff" text="C#" value={65} />
        </div>
        <div id="card-6">
          <SVGDialCircle color="#2dd5ff" text=".Net" value={60} />
        </div>
        <div id="card-7">
          <SVGDialCircle color="#2dd5ff" text="SQL" value={70} />
        </div>
        <div id="card-8">
          <SVGDialCircle color="#2dd5ff" text="EntityFrmwrk" value={80} />
        </div>
        <div id="card-9">
          <SVGDialCircle color="#2dd5ff" text="Azure" value={68} />
        </div>
        <div id="card-10">
          <SVGDialCircle color="#2dd5ff" text="Python" value={72} />
        </div>
        <div id="card-11">
          <SVGDialCircle color="#2dd5ff" text="Angular" value={56} />
        </div>
        <div id="card-12">
          <SVGDialCircle color="#2dd5ff" text="TypeScript" value={60} />
        </div>
      </div>
    </>
  );
}

export default Skills;
