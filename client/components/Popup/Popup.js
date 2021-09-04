import Link from "next/link";
import selectRandomQuotes from "../../helpers/selectRandomQuotes";
import Script from "next/script";

export default function Popup({ fromForm, firstName }) {
  return (
    <div className="Popup">
      {fromForm === "reserve" ? (
        <h2 className="greet">{selectRandomQuotes(firstName)}</h2>
      ) : (
        <h2 className="greet">Thanks for your feedback!</h2>
      )}

      <h3 className="gobi-stories-load" style={{ margin: "5rem 1rem" }}>
        Please wait to see our sponsors...
      </h3>
      <div
        className="gobi-stories"
        data-gobi-stories="gbyvv"
        data-gobi-color="#aa67dd"
        data-gobi-bubble-size="200px"
        data-gobi-animated-bubble="true"
        data-gobi-auto-start-with-sound="true"
        style={{ zIndex: 2 }}
      ></div>

      <br />

      <Link href="/">
        <button id="home-button">Go back to home</button>
      </Link>

      <Script id="show-stories">
        {`new gobi.Bubbles({
            container: ".gobi-stories",
            bubbleSize: "200px",            
            animatedBubble: "true",
            color: "#aa67dd",
            titleFontSize: "2rem",
            titleFontWeight: "bold",
            stories: [
              {
                id: "gbyvv",
                title: "Sponsors",
              },
            ],
            playerOptions: {
              autoStartWithSound: "true",
            },
            on: {
              loaded: () => {
                document.querySelector(".gobi-stories-load").innerText = "Click to watch";
                document.querySelector(".gobi-stories-load").style.margin = "2rem 1rem";
              },
            }
          });`}
      </Script>
    </div>
  );
}
