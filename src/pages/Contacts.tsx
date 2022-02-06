import SVGContacts from "../components/SvgContacts";
function Contacts() {
  return (
    <div className="contacts">
      <h1>Find me on-line:</h1>
      <SVGContacts color="#2dd5ff" type="github" delay={100} />
      <SVGContacts color="#2dd5ff" type="linkedin" delay={500} />
      <SVGContacts color="#2dd5ff" type="email" delay={900} />
    </div>
  );
}

export default Contacts;
