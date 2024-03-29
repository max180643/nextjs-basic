import "../styles/globals.css";
import { ThemeProvider } from "styled-components";

import Layout from "../components/Layout";

const theme = {
  colors: {
    primary: "teal",
    secondary: "blue",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
