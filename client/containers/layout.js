import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Head from "next/head";

export default function Layout({ children, componentName }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Reserve your cooking time slot here"
        />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2815892623196438"
          crossOrigin="anonymous"
        ></script>

        <title>GLC Cooking Reservation | {componentName}</title>
      </Head>

      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}
