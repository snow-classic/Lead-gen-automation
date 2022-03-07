import { Provider } from "react-redux";
import store from "../redux/store";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "antd/dist/antd.css";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";

import Spinner from "../components/spinner";
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Spinner />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
