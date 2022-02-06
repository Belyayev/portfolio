function Projects() {
  return (
    <div>
      <h2 className="general-title">Projects page</h2>
      <div className="project-item">
        {/* <div className="project-image">image</div> */}
        <div className="project-text">
          <p>
            This portfolio site you're visiting will be the first project I'd
            like to talk about. I've styled it in my favourite Sci-Fi theme and
            built lots of custom SVG elements to create it. Working on any
            project I like to learn things. Building this portfolio I've enjoyed
            playing with SVG animations using CSS and JS. Although SVG isn't the
            most user friendly tool when it comes to graphics design, it does
            provide fair amount of flexibility and allows to build interesting
            interactive graphics for web applications. This page is also built
            responsive using CSS grids and media queries.
          </p>
        </div>
      </div>
      <div className="project-item">
        {/* <div className="project-image">image</div> */}
        <div className="project-text">
          <p>
            https://freeshoppinglist.vercel.app/ is my second project I'd like
            to demo. It was written using MERN stack (MongoDB, Express, React,
            NodeJS). This was my first full stack application and I've learned
            whole range of technologies required to build end to end production
            ready tool (databases, APIs, Redux for state management, password
            encryption, CSS styling, etc.)
          </p>
        </div>
      </div>
      <div className="project-item">
        {/* <div className="project-image">image</div> */}
        <div className="project-text">
          <p>
            The next project was written in C# with Windows forms. This is basic
            "Paint"-like application that supports touch screen. It is easier to
            use for small children with all tools accessible on the screen by
            single click or touch. In full screen mode this application hides
            all other windows, so you don't need to worry about kids opening
            other things while drawing on your PC.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
