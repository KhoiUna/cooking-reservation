import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { origin } from "../../config";
import Header from "../../components/Header/Header";
import Calendar from "../../components/Calendar/Calendar";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

export default function Home() {
  const [dateIndex, setDateIndex] = useState(0);
  const handleClickDate = (move) => {
    if (move === "left") {
      setDateIndex(dateIndex - 1);
    }
    if (move === "right") {
      setDateIndex(dateIndex + 1);
    }
    setNumReservedObj(null);
  };

  const [firstFetch, setFirstFetch] = useState(true);
  const [numReservedObj, setNumReservedObj] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      let res = (async () =>
        await fetch(`${origin}/api/calendar?dateIndex=${dateIndex}`))();
      res
        .then((r) => r.json())
        .then((r) => {
          setNumReservedObj(r);
          setFirstFetch(false);
        });
    }, 100);
  }, [dateIndex]);

  return (
    <div className="Home">
      <Header />
      <h2>RESERVE YOUR COOKING TIME BELOW</h2>

      <legend>
        <i>
          <strong>... / 8</strong>: number of people reserved / number of people
          allowed
        </i>
        <div style={{ marginTop: "1%" }}>
          <i>
            <strong>* Click</strong> on the
            <span
              style={{
                color: "blue",
                backgroundColor: "orange",
                fontWeight: "bold",
                margin: "0 1%",
              }}
            >
              orange boxes
            </span>
            or the
            <span
              style={{
                color: "white",
                backgroundColor: "red",
                fontWeight: "bold",
                margin: "0 1%",
              }}
            >
              red boxes
            </span>
            to see who has reserved
          </i>
        </div>
      </legend>

      <Calendar
        numReservedObj={numReservedObj}
        dateIndex={dateIndex}
        handleClickDate={handleClickDate}
      />

      <div className="flex-buttons">
        {!firstFetch || numReservedObj ? (
          <>
            <Link to="/reserve">
              <button id="reserve-button">RESERVE</button>
            </Link>
            <Link to="/feedback">
              <button id="feedback-button">FEEDBACK</button>
            </Link>
          </>
        ) : (
          <p
            style={{
              padding: "0% 2%",
              fontStyle: "italic",
              fontWeight: "bold",
              fontSize: "1.1rem",
            }}
          >
            Your RESERVE button will appear shortly. Please wait...
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
}
