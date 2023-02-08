import { Trash } from "phosphor-react";
import { styled } from "../styles/stitches.config";

export const BaseButton = styled("button", {
  variants: {
    width: {
      fullWidth: {
        width: "100%",
      },
      adaptableWidth: {
        width: "min-content",
      },
    },
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: 0,
  padding: "1rem",
  borderRadius: "16px",

  color: "$red10",

  fontSize: "1.5rem",
  fontWeight: "bold",

  cursor: "pointer",

  "&:disabled": {
    opacity: 0.7,
    cursor: "not-allowed",
  },
});

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const DeleteButton = ({ ...rest }: Props) => {
  return (
    <BaseButton width="adaptableWidth" {...rest}>
      <Trash size={32} />
    </BaseButton>
  );
};
