import SVGDialCircle from "../components/SvgDialCircle";

function Skills() {
  return (
    <>
      <h2>My skills level at different technologies:</h2>
      <div className="skills">
        <SVGDialCircle color="rgb(45, 213, 255)" text="HTML" value={90} />
        <SVGDialCircle color="rgb(45, 213, 255)" text="CSS" value={95} />
        <SVGDialCircle color="rgb(45, 213, 255)" text="JavaScript" value={70} />
        <SVGDialCircle color="rgb(45, 213, 255)" text="React" />
        <SVGDialCircle color="rgb(45, 213, 255)" text="C#" />
        <SVGDialCircle color="rgb(45, 213, 255)" text=".Net" />
        <SVGDialCircle color="rgb(45, 213, 255)" text="SQL" />
        <SVGDialCircle color="rgb(45, 213, 255)" text="Entity Frmwrk" />
        <SVGDialCircle color="rgb(45, 213, 255)" text="Azure" />
        <SVGDialCircle color="rgb(45, 213, 255)" text="Python" />
        <SVGDialCircle color="rgb(45, 213, 255)" text="Angular" />
        <SVGDialCircle color="rgb(45, 213, 255)" text="TypeScript" />
      </div>
    </>
  );
}

export default Skills;
