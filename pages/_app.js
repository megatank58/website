import Layout from "../components/Layout";
import Router from "next/router";
import Progress from "nprogress";
import "../styles/progress.css";
import "../styles/globals.css";

Router.events.on("routeChangeStart", Progress.start);
Router.events.on("routeChangeError", Progress.done);
Router.events.on("routeChangeComplete", Progress.done);

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
