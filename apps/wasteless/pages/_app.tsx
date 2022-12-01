import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";


import { queryClient } from "../lib/react-query/queryClient";
import { darkTheme, globalStyles } from "cyber-ui/styles/stitches.config";

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        value={{
          dark: darkTheme,
        }}
      >
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
