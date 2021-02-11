import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./FeedbackForm.css";

export default function FeedbackForm() {
  return (
    <>
      <Header />

      <h2>FEEDBACK</h2>
      <h3 className="notice">* This part is for complaint & feedback</h3>

      <form>
        <div className="feedbackform-container">
          <div className="row">
            <label>Subject:</label>
            <div className="input">
              <input autoComplete="off" required type="text" />
            </div>
          </div>

          <div className="row">
            <label>Feedback:</label>
            <div className="input">
              <textarea required rows="5" cols="20"></textarea>
            </div>
          </div>

          <button type="submit" id="submit-button">
            SEND FEEDBACK
          </button>
        </div>
      </form>

      <Footer />
    </>
  );
}
