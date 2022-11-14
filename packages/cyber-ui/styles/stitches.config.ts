import { createStitches } from "@stitches/react";
import {
  gray,
  blue,
  red,
  green,
  grayDark,
  blueDark,
  redDark,
  greenDark,
} from "@radix-ui/colors";

// Theme
export const {
  styled,
  createTheme,
  theme: lightTheme,
  globalCss,
  config,
} = createStitches({
  theme: {
    colors: {
      ...gray,
      ...blue,
      ...red,
      ...green,
    },
  },
});

export const darkTheme = createTheme({
  colors: {
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
  },
});

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  ":focus": {
    outline: 0,
    boxShadow: "0 0 0 2px $red9",
  },

  body: {
    background: "$black",
    color: "$white",
    "-webkit-font-smoothing": "antialiased",
  },

  "body, input, text-area, button": {
    "font-family": { Roboto: "Roboto", sansSerif: "sans-serif" },
    fontWeight: 400,
    fontSize: "1rem",
  },
});
