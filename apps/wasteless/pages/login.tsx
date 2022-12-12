import { SocialLogin } from "cyber-ui";
import { signIn } from "next-auth/react";

const buttonsAttributes = [
  { name: "Google", key: "google" },
  { name: "Facebook", key: "facebook" },
  { name: "GitHub", key: "github" },
];

export default function Login() {
  return <SocialLogin buttonsAttributes={buttonsAttributes} signIn={signIn} />;
}
