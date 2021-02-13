import "./Popup.css";
import { Link } from "react-router-dom";

export default function Popup({ fromForm }) {
  return (
    <div className="Popup">
      {fromForm === "reserve" ? (
        <h2 className="greet">Thanks for reserving!</h2>
      ) : (
        <h2 className="greet">Thanks for your feedback!</h2>
      )}
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstockshop.angiemakes.com%2Fwp-content%2Fuploads%2F2018%2F10%2Fthankyou-01-1024x1024.jpg&f=1&nofb=1"
        alt="thank you"
        width="200"
      />
      <br />

      <Link to="/">
        <button id="home-button">Go back to home</button>
      </Link>
    </div>
  );
}
