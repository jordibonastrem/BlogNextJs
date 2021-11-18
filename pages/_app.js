import "../styles/global.css";
import Link from "next/link";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar/Navbar";
import FormAvatar from "../components/FormAvatar/FormAvatar";
import { useEffect, useState } from "react";
// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {
  const [isUserInLocal, setUserLocal] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("Avatar") != null) {
      setUserLocal(true);
    } else {
      setUserLocal(false);
    }
  }, []);

  console.log(isUserInLocal);
  return (
    <>
      {isUserInLocal ? (
        <>
          <Navbar />
          <Component {...pageProps} />{" "}
        </>
      ) : (
        <FormAvatar />
      )}
    </>
  );
}

export default MyApp;
