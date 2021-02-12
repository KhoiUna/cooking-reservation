import { Link } from "react-router-dom";
import "./Header.css";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <h1>
          <FontAwesomeIcon icon={faUtensils} id="header-icon" />
          COOKING RESERVATION
        </h1>
      </Link>
    </header>
  );
}
