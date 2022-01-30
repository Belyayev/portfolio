import SVGFrame from "../components/SvgFrame";

function Home() {
  return (
    <div className="home">
      <div>
        <h1 className="jumbo-font">Mike Belyayev</h1>
        <h1 className="jumbo-font">Software Developer</h1>
        <h1 className="jumbo-font">& UI/UX Designer</h1>
      </div>
      <SVGFrame color="#2dd5ff" />
    </div>
  );
}

export default Home;
