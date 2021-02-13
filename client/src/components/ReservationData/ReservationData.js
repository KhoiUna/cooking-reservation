export default function ReservationData({ data }) {
  if (data > 0 && data < 8)
    return (
      <div className="reservation-data">
        <p
          className="reservation-number"
          style={{ color: "#1000ff", backgroundColor: "orange" }}
        >
          {data} / 8
        </p>
      </div>
    );

  if (data === 8)
    return (
      <div className="reservation-data">
        <p
          className="reservation-number"
          style={{ color: "white", backgroundColor: "red" }}
        >
          {data} / 8
        </p>
      </div>
    );

  return (
    <div className="reservation-data">
      <p className="reservation-number">{data} / 8</p>
    </div>
  );
}
