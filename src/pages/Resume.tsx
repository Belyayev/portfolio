import { CSSProperties } from "react";

function Resume() {
  return (
    <div>
      <div className="stack" style={{ "--stacks": 3 } as CSSProperties}>
        <span style={{ "--index": 0 } as CSSProperties}>Resume</span>
        <span style={{ "--index": 1 } as CSSProperties}>Resume</span>
        <span style={{ "--index": 2 } as CSSProperties}>Resume</span>
      </div>
    </div>
  );
}

export default Resume;
