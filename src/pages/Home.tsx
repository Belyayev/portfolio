import SVGFrame from "../components/SvgFrame";
import { FaLaptopCode } from "react-icons/fa6";
import { BsDatabaseFillGear } from "react-icons/bs";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { CSSProperties } from "react";

function Home() {
  return (
    <div>
      <div className="home">
        <div>
          <div className="stack" style={{ "--stacks": 3 } as CSSProperties}>
            <span style={{ "--index": 0 } as CSSProperties}>Mike Belyayev</span>
            <span style={{ "--index": 1 } as CSSProperties}>Mike Belyayev</span>
            <span style={{ "--index": 2 } as CSSProperties}>Mike Belyayev</span>
          </div>
          <div className="jumbo-font">
            <FaLaptopCode style={{ marginRight: "0.5rem" }} />
            Software developer
          </div>
          <div className="jumbo-font">
            <BsDatabaseFillGear style={{ marginRight: "0.5rem" }} />
            Data Engineer
          </div>
          <div className="jumbo-font">
            <RiLightbulbFlashFill style={{ marginRight: "0.5rem" }} />
            Tech Creator
          </div>
        </div>
        <SVGFrame color="#2dd5ff" />
      </div>
      <div className="introText">
        <p>
          Hi, I'm Mike. As a software developer and tech enthusiast, I'm
          passionate about crafting beautiful and functional web applications.
          My journey began as an artist and graphic designer in the late '90s,
          long before I had access to a computer. Even now, I find magic in
          painting on a canvas with a real brush.
        </p>

        <p>
          Transitioning to digital art, I've mastered tools like Photoshop,
          Illustrator, Premiere, and After Effects, along with 3D animation and
          motion graphics software such as Blender and Unreal Engine. These
          tools are just part of my creative arsenal, and I'm always exploring
          new techniques, from welding steel to sculpting with concrete.
        </p>

        <p>
          Since 2020, I've been developing software professionally for a major
          global energy company, working with a team to create complex web
          applications. As a "frontend-heavy" full-stack developer, I thrive on
          both building projects for friends and family and taking on freelance
          work in my spare time.
        </p>

        <p>
          Starting in 2024, I transitioned to a data engineer role, further
          expanding my skills. This has allowed me to blend my software
          development experience with data analysis capabilities, making me an
          even more versatile and effective developer. Having strong data
          analysis skills is a tremendous asset for developers, as it enhances
          decision-making, problem-solving, and the ability to create
          data-driven applications.
        </p>
        <p>Check out my portfolio page to see what I've been up to!</p>
      </div>
    </div>
  );
}

export default Home;
