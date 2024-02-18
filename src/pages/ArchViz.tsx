import SVGDialCircle from "../components/SvgDialCircle";
import YoutubeEmbed from "../components/YoutubeEmbed";

function ArchViz() {
  return (
    <div>
      <h2 className="general-title">Architectural Vizualization:</h2>
      <div className="archviz">
        <p>
          Throughout the years I've tried many styles and applications creating
          visuals. Architectural Vizualization a.k.a. "ArchViz" was one of them.
          Below I present a project that was modeled using Blender and rendered
          in Unreal Engine 5. There{" "}
          <a
            className="link"
            href="https://filedn.com/lsWfTQIKr30JnApFhpa8hNf/Grafton/"
            target="_blank"
          >
            downloadable version
          </a>{" "}
          of the "game" if you'd like to walk around this house in first person.
        </p>
        <YoutubeEmbed embedId="kh0QGt24vjA" />
        <YoutubeEmbed embedId="5vY-wobT0yA" />
      </div>
    </div>
  );
}

export default ArchViz;
