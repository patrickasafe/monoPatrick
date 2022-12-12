import { styled } from "../../styles/stitches.config";
import { BaseButton } from "../Button";
import {
  SocialLoginContainer,
  SocialLoginDown,
  SocialLoginUp,
} from "./SocialLoginContainer";
import { Input } from "./Input";
import { SignInWithButton } from "./SignInWithButton";
import { SocialForm } from "./Form";

const LoginText = styled("h1", {
  marginUp: "3rem",
  marginDown: "3rem",
});

export const SocialLogin = () => {
  return (
    <SocialLoginContainer>
      <SocialLoginUp>
        <LoginText>LOGIN</LoginText>
        <SignInWithButton buttonText="Sign in with Google" />
        <SignInWithButton buttonText="Sign in with Meta" />
      </SocialLoginUp>
      <SocialLoginDown>
        <SocialForm />
      </SocialLoginDown>
    </SocialLoginContainer>
  );
};
