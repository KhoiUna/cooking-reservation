import "./ReservationList.css";

export default function ReservationList({ data, closePopup }) {
  return (
    <>
      <div className="ReservationList-layer" onClick={closePopup}></div>
      <div
        className="ReservationList"
        style={{ borderColor: data === 8 ? "red" : "orange" }}
      >
        <h2 className="title">RESERVATIONS LIST</h2>

        <div className="reservations">{data}</div>
      </div>
    </>
  );
}
