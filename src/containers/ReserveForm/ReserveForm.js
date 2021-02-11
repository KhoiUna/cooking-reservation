import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./ReserveForm.css";
import FormatTime from "../../utils/FormatTime";

export default function ReserveForm() {
  return (
    <>
      <Header />

      <h2>PLEASE FILL IN ALL FIELDS</h2>

      <form>
        <div className="form-container">
          <div className="row">
            <label>First name:</label>
            <div className="input">
              <input autoComplete="off" required type="text" />
            </div>
          </div>

          <div className="row">
            <label>Last name:</label>
            <div className="input">
              <input autoComplete="off" required type="text" />
            </div>
          </div>

          <div className="row">
            <label>Number of people:</label>
            <div className="input">
              <input autoComplete="off" required type="number" minLength="0" />
            </div>
          </div>

          <div className="row">
            <label>Date:</label>
            <div className="input">
              <input autoComplete="off" required type="date" />
            </div>
          </div>

          <div className="row">
            <label>Time slot:</label>
            <div className="input">
              <select>
                {[...Array(24).keys()].map((time, index) => (
                  <option value={time} key={index}>
                    {FormatTime.timeSlot(time)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button type="submit" id="submit-button">
            SUBMIT
          </button>
        </div>
      </form>

      <Footer />
    </>
  );
}
