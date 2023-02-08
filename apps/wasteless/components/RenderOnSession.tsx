import { Table } from "cyber-ui";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { tableColumnMock } from "../data/mockData";
import { useItems } from "../hooks/useItems";
import useSoftDeleteItemMutation from "../hooks/useSoftDeleteItemMutation";
import { NewItemForm } from "./NewItemForm";

export const RenderOnSession = () => {
  const { data: session } = useSession();
  const [tableData, setTableData] = useItems();
  const deleteMutate = useSoftDeleteItemMutation();

  useEffect(() => {
    if (session) {
      // load and fetch data
    }
  }, [session]);

  return (
    <>
      <NewItemForm />
      <Table
        data={tableData}
        columns={tableColumnMock}
        setData={setTableData}
        deleteMutate={deleteMutate}
      />
    </>
  );
};
