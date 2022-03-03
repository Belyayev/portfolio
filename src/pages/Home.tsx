import SVGFrame from "../components/SvgFrame";

function Home() {
  return (
    <div className="home">
      <div>
        <h1 className="jumbo-font">Mike Belyayev</h1>
        <h2 className="jumbo-font">Software developer</h2>
        <h2 className="jumbo-font">Graphic designer</h2>
        <h2 className="jumbo-font">Life long learner</h2>
      </div>
      <SVGFrame color="#2dd5ff" />
    </div>
  );
}

export default Home;
