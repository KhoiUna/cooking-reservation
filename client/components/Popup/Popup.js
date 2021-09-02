import Link from "next/link";
import selectRandomQuotes from "../../helpers/selectRandomQuotes";

export default function Popup({ fromForm, firstName }) {
  return (
    <div className="Popup">
      {fromForm === "reserve" ? (
        <h2 className="greet">{selectRandomQuotes(firstName)}</h2>
      ) : (
        <h2 className="greet">Thanks for your feedback!</h2>
      )}
      <img src={"/thankyou.jpg"} alt="Thank you" width="200" />
      <br />

      <Link href="/">
        <button id="home-button">Go back to home</button>
      </Link>
    </div>
  );
}
