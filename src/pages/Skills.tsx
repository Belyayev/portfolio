import SVGDialCircle from "../components/SvgDialCircle";

function Skills() {
  return (
    <>
      <h2>My skills level at different technologies:</h2>
      <div className="skills">
        <div className="skill-card">
          <SVGDialCircle color="#2dd5ff" text="HTML" value={94} />
        </div>
        <div className="skill-card" style={{ animationDelay: "0.1s" }}>
          <SVGDialCircle color="#2dd5ff" text="CSS" value={92} />
        </div>
        <div className="skill-card" style={{ animationDelay: "0.2s" }}>
          <SVGDialCircle color="#2dd5ff" text="JavaScript" value={77} />
        </div>
        <div className="skill-card" style={{ animationDelay: "0.3s" }}>
          <SVGDialCircle color="#2dd5ff" text="React" value={80} />
        </div>
        <div className="skill-card" style={{ animationDelay: "0.4s" }}>
          <SVGDialCircle color="#2dd5ff" text="C#" value={65} />
        </div>
        <div className="skill-card" style={{ animationDelay: "0.5s" }}>
          <SVGDialCircle color="#2dd5ff" text=".Net" value={60} />
        </div>
        <div className="skill-card" style={{ animationDelay: "0.6s" }}>
          <SVGDialCircle color="#2dd5ff" text="SQL" value={70} />
        </div>
        <div className="skill-card" style={{ animationDelay: "0.7s" }}>
          <SVGDialCircle color="#2dd5ff" text="EntityFrmwrk" value={80} />
        </div>
        <div className="skill-card" style={{ animationDelay: "0.8s" }}>
          <SVGDialCircle color="#2dd5ff" text="Azure" value={68} />
        </div>
        <div className="skill-card" style={{ animationDelay: "0.9s" }}>
          <SVGDialCircle color="#2dd5ff" text="Python" value={72} />
        </div>
        <div className="skill-card" style={{ animationDelay: "1s" }}>
          <SVGDialCircle color="#2dd5ff" text="Angular" value={56} />
        </div>
        <div className="skill-card" style={{ animationDelay: "1.1s" }}>
          <SVGDialCircle color="#2dd5ff" text="TypeScript" value={60} />
        </div>
      </div>
    </>
  );
}

export default Skills;
