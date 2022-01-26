import SVGDialCircle from "../components/SvgDialCircle";

function Skills() {
  return (
    <>
      <h2>My skills level at different technologies:</h2>
      <div className="skills">
        <SVGDialCircle color="rgb(45, 213, 255)" text="HTML" value={94} />
        <SVGDialCircle color="rgb(45, 213, 255)" text="CSS" value={92} />
        <SVGDialCircle color="rgb(45, 213, 255)" text="JavaScript" value={77} />
        <SVGDialCircle color="rgb(45, 213, 255)" text="React" value={80} />
        <SVGDialCircle color="rgb(45, 213, 255)" text="C#" value={65} />
        <SVGDialCircle color="rgb(45, 213, 255)" text=".Net" value={60} />
        <SVGDialCircle color="rgb(45, 213, 255)" text="SQL" value={70} />
        <SVGDialCircle
          color="rgb(45, 213, 255)"
          text="Entity Frmwrk"
          value={80}
        />
        <SVGDialCircle color="rgb(45, 213, 255)" text="Azure" value={68} />
        <SVGDialCircle color="rgb(45, 213, 255)" text="Python" value={72} />
        <SVGDialCircle color="rgb(45, 213, 255)" text="Angular" value={56} />
        <SVGDialCircle color="rgb(45, 213, 255)" text="TypeScript" value={60} />
      </div>
    </>
  );
}

export default Skills;
