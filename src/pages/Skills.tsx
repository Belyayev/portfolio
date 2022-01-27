import SVGDialCircle from "../components/SvgDialCircle";

function Skills() {
  return (
    <>
      <h2>My skills level at different technologies:</h2>
      <div className="skills">
        <SVGDialCircle color="#2dd5ff" text="HTML" value={94} delay={10} />
        <SVGDialCircle color="#2dd5ff" text="CSS" value={92} delay={100} />
        <SVGDialCircle
          color="#2dd5ff"
          text="JavaScript"
          value={77}
          delay={200}
        />
        <SVGDialCircle color="#2dd5ff" text="React" value={80} delay={300} />
        <SVGDialCircle color="#2dd5ff" text="C#" value={65} delay={400} />
        <SVGDialCircle color="#2dd5ff" text=".Net" value={60} delay={500} />
        <SVGDialCircle color="#2dd5ff" text="SQL" value={70} delay={600} />
        <SVGDialCircle
          color="#2dd5ff"
          text="EntityFrmwrk"
          value={80}
          delay={700}
        />
        <SVGDialCircle color="#2dd5ff" text="Azure" value={68} delay={800} />
        <SVGDialCircle color="#2dd5ff" text="Python" value={72} delay={900} />
        <SVGDialCircle color="#2dd5ff" text="Angular" value={56} delay={1000} />
        <SVGDialCircle
          color="#2dd5ff"
          text="TypeScript"
          value={60}
          delay={1100}
        />
      </div>
    </>
  );
}

export default Skills;
