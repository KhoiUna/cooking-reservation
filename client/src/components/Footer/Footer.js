import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} A product of{" "}
        <a
          href="https://bit.ly/khoiuna_links"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i>Khoi Una</i>
        </a>
      </p>
    </footer>
  );
}
