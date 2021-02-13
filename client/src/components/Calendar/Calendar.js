import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Calendar.css";
import FormatTime from "../../helpers/FormatTime";
import { useEffect, useState } from "react";
import ReservationData from "../ReservationData/ReservationData";
import { origin } from "../../config";

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

  const [numReservedObj, setNumReservedObj] = useState(null);

  useEffect(() => {
    let res = (async () =>
      await fetch(`${origin}/api/calendar?dateIndex=${dateIndex}`))();

    res
      .then((r) => r.json())
      .then((r) => {
        setNumReservedObj(r);
      });
  }, [dateIndex]);

  return (
    <div className="Calendar">
      <table>
        <thead>
          <tr>
            <th id="left-arrow">
              {dateIndex > 0 && (
                <FontAwesomeIcon
                  className="arrow-button"
                  icon={faArrowLeft}
                  onClick={() => handleClickDate("left")}
                />
              )}
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
              <th key={index}>
                <p className="date-of-week" key={index}>
                  {FormatTime.dateOfWeek(dateIndex, index)}
                </p>
              </th>
            ))}
            <th></th>
          </tr>
          {numReservedObj
            ? [...new Array(24).fill(null)].map((item, yIndex) => (
                <tr className="reservation-rows" key={yIndex}>
                  <th className="reservation-time">
                    {FormatTime.timeSlot(yIndex)}
                  </th>
                  {numReservedObj[yIndex + 1].map((item, index) => (
                    <th key={index}>
                      <ReservationData data={item * 1} />
                    </th>
                  ))}
                  <th></th>
                </tr>
              ))
            : [...Array(24).keys()].map((time, index) => (
                <tr className="reservation-rows" key={index}>
                  <th className="reservation-time">
                    {FormatTime.timeSlot(time)}
                  </th>
                  <th colSpan={7}>
                    <div className="reservation-loading">
                      <p className="reservation-number">...</p>
                    </div>
                  </th>
                  <th></th>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}
