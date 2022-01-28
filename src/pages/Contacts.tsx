import SVGContacts from "../components/SvgContacts";
function Contacts() {
  return (
    <div>
      <h1>Few ways to reach out:</h1>
      <div className="contact-card">
        <SVGContacts color="#2dd5ff" />
      </div>
      <div className="contact-card">
        <SVGContacts color="#2dd5ff" />
      </div>
      <div className="contact-card">
        <SVGContacts color="#2dd5ff" />
      </div>
    </div>
  );
}

export default Contacts;
