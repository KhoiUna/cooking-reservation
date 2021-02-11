import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Calendar from "../../components/Calendar/Calendar";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <Header />
      <h2>RESERVE YOUR COOKING TIME BELOW</h2>

      <legend>
        <i>
          <strong>... / 8</strong>: number of people reserved / number of people
          allowed
        </i>
      </legend>
      <Calendar />

      <div className="flex-buttons">
        <Link to="/reserve">
          <button id="reserve-button">CLICK HERE TO RESERVE</button>
        </Link>
        <Link to="/feedback">
          <button id="feedback-button">CLICK HERE FOR FEEDBACK</button>
        </Link>
      </div>

      <Footer />
    </div>
  );
}
