import "../../src/styles/globals.scss";

import React from "react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { store } from "../redux/store";
import withLayout from "~src/hoc/withLayout";

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default withLayout(App, { blacklist: [] });
