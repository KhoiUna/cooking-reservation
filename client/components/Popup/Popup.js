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
      {/* <img src="/thankyou.jpg" alt="Thank you" width="200" /> */}
      <div
        className="gobi-stories"
        data-gobi-stories="gbyvv"
        data-gobi-color="#aa67dd"
        data-gobi-bubble-size="200px"
        data-gobi-animated-bubble="true"
        data-gobi-auto-start-with-sound="true"
      ></div>

      <br />

      <Link href="/">
        <button id="home-button">Go back to home</button>
      </Link>

      <Script
        strategy="beforeInteractive"
        src="https://unpkg.com/@gobistories/gobi-web-integration@^6.11.1"
      />
      <Script id="show-stories">
        {`new gobi.Bubbles({
            container: ".gobi-stories",
            stories: [
              {
                id: "gbyvv",
                title: "Sponsors",
              },
            ],
            bubbleSize: "200px",            
            animatedBubble: "true",
            color: "#aa67dd",
            titleFontSize: "2rem",
            titleFontWeight: "bold",
          });`}
      </Script>
    </div>
  );
}
