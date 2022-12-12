import { styled } from "../../styles/stitches.config";

export const SocialLoginContainer = styled("div", {
  width: "fit-content",
  margin: "2rem auto",

  borderRadius: "8px",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",

  border: "1px solid $gray9",
});

export const SocialLoginUp = styled("div", {
  width: "fit-content",
  paddingRight: "2rem",
  paddingLeft: "2rem",

  borderRadius: "8px",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",

  h1: {
    padding: "3rem",
  },
});

export const SocialLoginDown = styled("div", {
  width: "fit-content",
  marginTop: "3rem",

  marginBottom: "1rem",

  borderRadius: "8px",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",

  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
