import { HomeContainer, Table } from "cyber-ui";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

import { useItems } from "../../hooks/useItems";
import { tableColumnMock } from "../../data/mockData";
import { NewItemForm } from "../NewItemForm";
import useSoftDeleteItemMutation from "../../hooks/useSoftDeleteItemMutation";
import { SocialButton } from "cyber-ui/components/SocialLogin/SignInWithButton";

export const HomeBody = () => {
  const { data: session } = useSession();
  const [tableData, setTableData] = useItems();
  const deleteMutate = useSoftDeleteItemMutation();

  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("login/");
  };

  if (session)
    return (
      <HomeContainer>
        <NewItemForm />

        <Table
          data={tableData}
          columns={tableColumnMock}
          setData={setTableData}
          deleteMutate={deleteMutate}
        />
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
