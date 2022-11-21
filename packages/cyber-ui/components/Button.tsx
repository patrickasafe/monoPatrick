import { PrimitiveButtonProps } from "@radix-ui/react-popover";
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

interface DeleteButtonProps extends PrimitiveButtonProps {}

export const DeleteButton = ({ ...rest }: DeleteButtonProps) => {
  return (
    <BaseButton width="adaptableWidth" {...rest}>
      <Trash size={32} />
    </BaseButton>
  );
};
