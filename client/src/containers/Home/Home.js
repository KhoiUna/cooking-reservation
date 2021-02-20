import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { origin } from "../../config";
import Header from "../../components/Header/Header";
import Calendar from "../../components/Calendar/Calendar";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

export default function Home() {
  const [numReservedObj, setNumReservedObj] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      let res = (async () =>
        await fetch(`${origin}/api/calendar?dateIndex=0`))();

      res
        .then((r) => r.json())
        .then((r) => {
          setNumReservedObj(r);
        });
    }, 100);
  });

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
        {numReservedObj ? (
          <>
            <Link to="/reserve">
              <button id="reserve-button">RESERVE</button>
            </Link>
            <Link to="/feedback">
              <button id="feedback-button">FEEDBACK</button>
            </Link>
          </>
        ) : (
          <h3>
            <i>Your RESERVE button will appear shortly. Please wait...</i>
          </h3>
        )}
      </div>

      <Footer />
    </div>
  );
}
