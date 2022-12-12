import { styled } from "../../styles/stitches.config";
import {
  SocialLoginContainer,
  SocialLoginDown,
  SocialLoginUp,
} from "./SocialLoginContainer";
import { SignInWithButton } from "./SignInWithButton";
import { SocialForm } from "./Form";

const LoginText = styled("h1", {
  marginUp: "3rem",
  marginDown: "3rem",
});

type ButtonAttributes = {
  name: string;
  key: string;
};
interface Props {
  signIn: any;
  buttonsAttributes: ButtonAttributes[];
}

export const SocialLogin = ({
  signIn,
  buttonsAttributes: buttonAttributes,
}: Props) => {
  return (
    <SocialLoginContainer>
      <SocialLoginUp>
        <LoginText>LOGIN</LoginText>
        {buttonAttributes.map((buttonAttribute) => (
          <SignInWithButton
            signIn={signIn}
            signInKey={buttonAttribute.key}
            buttonText={`Sign in with ${buttonAttribute.name}`}
          />
        ))}
      </SocialLoginUp>
      <SocialLoginDown>
        <SocialForm />
      </SocialLoginDown>
    </SocialLoginContainer>
  );
};
