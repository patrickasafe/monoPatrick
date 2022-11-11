import type { AppProps } from "next/app";

import { ThemeProvider } from "next-themes";

import { darkTheme, globalStyles } from "cyber-ui/styles/stitches.config";

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      value={{
        dark: darkTheme,
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
