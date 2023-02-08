import { HomeContainer, Table } from "cyber-ui";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

import { SocialButton } from "cyber-ui/components/SocialLogin/SignInWithButton";
import { RenderOnSession } from "../RenderOnSession";

export const HomeBody = () => {
  const { data: session } = useSession();

  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("login/");
  };

  if (session)
    return (
      <HomeContainer>
        <RenderOnSession />
        <SocialButton
          textAlignment="center"
          onClick={() => signOut({ redirect: false })}
        >
          SAIR
        </SocialButton>
      </HomeContainer>
    );
  return (
    <HomeContainer>
      <SocialButton textAlignment="center" onClick={(e) => handleClick(e)}>
        ENTRAR
      </SocialButton>
    </HomeContainer>
  );
};
