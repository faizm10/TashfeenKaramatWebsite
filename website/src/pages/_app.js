// import Navbar from ''
import "../app/globals.css";
import Navbar from "../components/Navbar/navbar";
import * as React from "react";

// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextUIProvider>
        {/* <Navbar /> */}
        <Component {...pageProps} />
      </NextUIProvider>
    </>
  );
}

export default MyApp;
