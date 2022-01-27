import SVGDialCircle from "../components/SvgDialCircle";

function Skills() {
  return (
    <>
      <h2>My skills level at different technologies:</h2>
      <div className="skills">
        <SVGDialCircle color="#2dd5ff" text="HTML" value={95} delay={100} />
        <SVGDialCircle color="#2dd5ff" text="CSS" value={95} delay={200} />
        <SVGDialCircle
          color="#2dd5ff"
          text="JavaScript"
          value={75}
          delay={300}
        />
        <SVGDialCircle color="#2dd5ff" text="React" value={80} delay={400} />
        <SVGDialCircle color="#2dd5ff" text="C#" value={65} delay={500} />
        <SVGDialCircle color="#2dd5ff" text=".Net" value={60} delay={600} />
        <SVGDialCircle color="#2dd5ff" text="SQL" value={70} delay={700} />
        <SVGDialCircle
          color="#2dd5ff"
          text="EntityFrmwrk"
          value={60}
          delay={800}
        />
        <SVGDialCircle color="#2dd5ff" text="Azure" value={65} delay={900} />
        <SVGDialCircle color="#2dd5ff" text="Python" value={40} delay={1000} />
        <SVGDialCircle color="#2dd5ff" text="Angular" value={45} delay={1100} />
        <SVGDialCircle
          color="#2dd5ff"
          text="TypeScript"
          value={60}
          delay={1200}
        />
      </div>
    </>
  );
}

export default Skills;
