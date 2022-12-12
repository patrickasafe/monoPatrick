import { ButtonHTMLAttributes, ReactSVG } from "react";
import { styled } from "../../styles/stitches.config";

export const SocialButton = styled("button", {
  variants: {
    textAlignment: {
      center: {
        justifyContent: "center",
        boxShadow: "none",
      },
    },
  },

  height: "3rem",
  width: "20rem",

  margin: "0.3225rem",

  boxShadow: "0px 0.25rem 0.25rem black",

  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",

  cursor: "pointer",

  alignItems: "center",
});

const ButtonText = styled("span", {
  fontSize: "1.25rem",
  marginLeft: "1rem",
});

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  Logo?: ReactSVG;
  signInKey: string;
  signIn: any;
}

export const SignInWithButton = ({
  buttonText,
  Logo,
  signIn,
  signInKey,
  ...rest
}: Props) => {
  return (
    <SocialButton
      onClick={() => signIn(signInKey, { callbackUrl: "/" })}
      {...rest}
    >
      <ButtonText>{buttonText}</ButtonText>
    </SocialButton>
  );
};
