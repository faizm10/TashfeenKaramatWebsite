// import Navbar from ''
import "../app/globals.css";
import Navbar from "../app/navbar";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
