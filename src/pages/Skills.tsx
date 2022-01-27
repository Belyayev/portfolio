import SVGDialCircle from "../components/SvgDialCircle";

function Skills() {
  return (
    <>
      <h2>My skills level at different technologies:</h2>
      <div className="skills">
        <SVGDialCircle color="#2dd5ff" text="HTML" value={94} />
        <SVGDialCircle color="#2dd5ff" text="CSS" value={92} delay={1000} />
        <SVGDialCircle
          color="#2dd5ff"
          text="JavaScript"
          value={77}
          delay={2000}
        />
        <SVGDialCircle color="#2dd5ff" text="React" value={80} />
        <SVGDialCircle color="#2dd5ff" text="C#" value={65} />
        <SVGDialCircle color="#2dd5ff" text=".Net" value={60} />
        <SVGDialCircle color="#2dd5ff" text="SQL" value={70} />
        <SVGDialCircle color="#2dd5ff" text="EntityFrmwrk" value={80} />
        <SVGDialCircle color="#2dd5ff" text="Azure" value={68} />
        <SVGDialCircle color="#2dd5ff" text="Python" value={72} />
        <SVGDialCircle color="#2dd5ff" text="Angular" value={56} />
        <SVGDialCircle color="#2dd5ff" text="TypeScript" value={60} />
      </div>
    </>
  );
}

export default Skills;
