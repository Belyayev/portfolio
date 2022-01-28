import SVGContacts from "../components/SvgContacts";
function Contacts() {
  return (
    <div>
      <h1>Few ways to reach out:</h1>
      <div className="contact-card">
        <SVGContacts color="#2dd5ff" type="github" />
      </div>
      <div className="contact-card">
        <SVGContacts color="#2dd5ff" type="linkedin" />
      </div>
      <div className="contact-card">
        <SVGContacts color="#2dd5ff" type="email" />
      </div>
    </div>
  );
}

export default Contacts;
