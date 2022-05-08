import "../../src/styles/globals.scss";

import React from "react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";

import { store } from "../redux/store";
import withLayout from "~src/hoc/withLayout";

const configQuery = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
};

function App({ Component, pageProps }: AppProps) {
  const isDevEnv = process.env.NEXT_PUBLIC_ENV === "development";
  const [queryClient] = React.useState(() => new QueryClient(configQuery));
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      {isDevEnv && <ReactQueryDevtools />}
    </QueryClientProvider>
  );
}

export default withLayout(App, { blacklist: [] });
