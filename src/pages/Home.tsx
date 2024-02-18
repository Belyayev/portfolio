import SVGFrame from "../components/SvgFrame";
import { FaLaptopCode } from "react-icons/fa6";
import { IoColorPaletteSharp } from "react-icons/io5";
import { RiLightbulbFlashFill } from "react-icons/ri";

function Home() {
  return (
    <div>
      <div className="home">
        <div>
          <div className="jumbo-font" style={{ borderBottom: "solid 2px" }}>
            Mike Belyayev
          </div>
          <div className="jumbo-font">
            <FaLaptopCode style={{ marginRight: "0.5rem" }} />
            SW developer
          </div>
          <div className="jumbo-font">
            <IoColorPaletteSharp style={{ marginRight: "0.5rem" }} />
            Graphics designer
          </div>
          <div className="jumbo-font">
            <RiLightbulbFlashFill style={{ marginRight: "0.5rem" }} />
            Hi-Tech geek
          </div>
        </div>
        <SVGFrame color="#2dd5ff" />
      </div>
      <div className="introText">
        <p>
          My name is Mike. I am a software developer and a technology
          enthusiast. I enjoy building beautiful and functional web applications
          and create things.
        </p>
        <p>
          I've started my journey as an artist and graphic designer back in late
          90's before I had access to computer. Up to this day I still enjoy
          painting on a canvas. There something magical about real (non-digital)
          paint brush.
        </p>
        <p>
          With the help of computers I've learned how to create digital art.
          Anything from static images to complex 3D animation and motion
          graphics. I am proficient in most Adobe tools like Photoshop,
          Illustrator, Premiere and After Effects as well as a dozen of other
          tools like Blender 3D or Unreal Engine. At the end of the day those
          are just tools that I use to get the job done. And yes, I discover and
          learn new tools all the time. How about welding steel or making a
          sculture out of the concrete? Yup, I do that too when weather is good
          :).
        </p>
        <p>
          Starting 2020 I was professionally developing software in a major
          global energy company. I am working with the team of developers
          creating complex web applications and systems. I am a "frontend heavy"
          full stack developer.
        </p>
        <p>
          I also enjoy building a hobby projects, web applications for friends
          and family and some odd freelance projects in my spare time. Check out
          my projects page to see what I've been working on recently.
        </p>
      </div>
    </div>
  );
}

export default Home;
