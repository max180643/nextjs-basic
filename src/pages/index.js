// Static Generation without data

import Head from "next/head";
import Router from "next/router";
// import styles from "../styles/Home.module.css";

export default function Home() {
  if (Router.router) console.log(Router.router.query);

  // Router events
  Router.events.on("routeChangeStart", () => console.log("Start"));
  Router.events.on("routeChangeComplete", () => console.log("Complete"));

  return (
    <>
      <Head>
        <title>Index</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Getting Started</h1>
      <p>Welcome to the Next.js documentation!</p>
      <p>
        If you're new to Next.js we recommend that you start with the learn
        course.
      </p>
    </>
  );
}
