import { styled } from "../../styles/stitches.config";

export const HomeContainer = styled("div", {
  display: "flex",
  flex: 1,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.5rem",
    margin: "1.5rem",
  },
});
