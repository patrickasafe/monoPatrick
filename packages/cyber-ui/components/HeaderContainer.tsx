import { styled } from "@stitches/react";

export const HeaderContainer = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  nav: {
    display: "flex",
    gap: "0.5rem",

    a: {
      width: "3rem",
      height: "3rem",

      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      color: "gray1",

      borderTop: "3px solid transparent",
      borderBottom: "3px solid transparent",

      "&:hover": {
        borderBottom: "3px solid green3",
      },
      "&.active": {
        color: "green5",
      },
    },
  },
});
