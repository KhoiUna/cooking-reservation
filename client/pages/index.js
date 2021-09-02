import Link from "next/link";
import { useState, useEffect } from "react";
import { origin } from "../config/config";
import Calendar from "../components/Calendar/Calendar";
import Layout from "../containers/layout";

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
    <Layout componentName="Home">
      <div className="App">
        <h2>RESERVE YOUR COOKING TIME BELOW</h2>

        <legend className="legend-home">
          <i>
            <strong>8 / 8</strong>: number of people reserved / number of people
            allowed
          </i>
          <div style={{ marginTop: "1%" }}>
            <i>
              <strong>* Click</strong> on the <strong>time slot</strong> to see
              who has reserved
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
              <Link href="/reserve">
                <button id="reserve-button">RESERVE</button>
              </Link>
              <Link href="/feedback">
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
      </div>
    </Layout>
  );
}