import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Calendar.css";
import FormatTime from "../../utils/FormatTime";
import { useState } from "react";

export default function Calendar() {
  const [dateIndex, setDateIndex] = useState(0);
  const handleClickDate = (move) => {
    if (move === "left") {
      setDateIndex(dateIndex - 1);
    }
    if (move === "right") {
      setDateIndex(dateIndex + 1);
    }
  };

  const [numReserved, setNumReserved] = useState();

  return (
    <div className="Calendar">
      <table>
        <thead>
          <tr>
            <th id="left-arrow">
              <FontAwesomeIcon
                className="arrow-button"
                icon={faArrowLeft}
                onClick={() => handleClickDate("left")}
              />
            </th>
            <th colSpan="7" id="month-year">
              <h3 style={{ paddingRight: "14%" }}>
                {FormatTime.monthYear(dateIndex)}
              </h3>
            </th>
            <th id="right-arrow">
              <FontAwesomeIcon
                className="arrow-button"
                icon={faArrowRight}
                onClick={() => {
                  handleClickDate("right");
                }}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="tbody-title">
            <th style={{ textAlign: "center" }} className="reservation-time">
              Time Slot
            </th>
            {new Array(7).fill(null).map((item, index) => (
              <th>
                <p className="date-of-week" key={index}>
                  {FormatTime.dateOfWeek(dateIndex, index)}
                </p>
              </th>
            ))}
            <th></th>
          </tr>
          {[...Array(24).keys()].map((time, index) => (
            <tr className="reservation-rows" key={index}>
              <th className="reservation-time">{FormatTime.timeSlot(time)}</th>
              {new Array(7).fill(null).map((item, index) => (
                <th key={index}>
                  <div className="reservation-data">
                    <p className="reservation-number">
                      {numReserved || "..."} / 8
                    </p>
                  </div>
                </th>
              ))}
              <th></th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
