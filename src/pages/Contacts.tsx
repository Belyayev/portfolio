import SVGContacts from "../components/SvgContacts";
import { CSSProperties } from "react";

function Contacts() {
  return (
    <div className="contacts">
      <div className="stack" style={{ "--stacks": 3 } as CSSProperties}>
        <span style={{ "--index": 0 } as CSSProperties}>Contacts</span>
        <span style={{ "--index": 1 } as CSSProperties}>Contacts</span>
        <span style={{ "--index": 2 } as CSSProperties}>Contacts</span>
      </div>
      <SVGContacts color="#2dd5ff" type="github" delay={100} />
      <SVGContacts color="#2dd5ff" type="linkedin" delay={500} />
      <SVGContacts color="#2dd5ff" type="email" delay={900} />
    </div>
  );
}

export default Contacts;
