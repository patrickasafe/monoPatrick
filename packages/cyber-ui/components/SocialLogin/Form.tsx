import { Input } from "./Input";
import { SocialButton } from "./SignInWithButton";

export const SocialForm = () => {
  return (
    <form>
      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <SocialButton textAlignment="center">SIGN IN</SocialButton>
    </form>
  );
};
