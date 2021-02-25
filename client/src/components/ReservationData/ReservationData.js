import { useState } from "react";
import ReservationList from "../ReservationList/ReservationList";

export default function ReservationData({ data }) {
  let colorObj;
  if (data > 0 && data < 8) {
    colorObj = { color: "blue", backgroundColor: "orange", cursor: "pointer" };
  } else if (data === 8) {
    colorObj = { color: "white", backgroundColor: "red", cursor: "pointer" };
  }

  const [showPopup, setShowPopup] = useState(false);
  const triggerPopup = () => {
    setShowPopup(true);
  };
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="reservation-data" onClick={triggerPopup}>
        <p className="reservation-number" style={colorObj}>
          {data} / 8
        </p>
      </div>

      {showPopup && data > 0 && (
        <ReservationList data={data} closePopup={closePopup} />
      )}
    </>
  );
}
