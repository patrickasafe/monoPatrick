import { styled } from "../styles/stitches.config";

export const Button = styled("button", {
  width: "100%",
  border: 0,
  padding: "1rem",
  borderRadius: "16px",

  color: "$red10",

  gap: "0.5rem",

  fontSize: "1.5rem",
  fontWeight: "bold",

  cursor: "pointer",

  "&:disabled": {
    opacity: 0.7,
    cursor: "not-allowed",
  },
});
