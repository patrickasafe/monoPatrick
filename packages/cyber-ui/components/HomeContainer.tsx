import { styled } from "../styles/stitches.config";

export const HomeContainer = styled("div", {
  flex: 1,

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "3.5rem",
  },
});
