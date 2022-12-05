import { HomeContainer, Table } from "cyber-ui";
import { useItems } from "../../hooks/useItems";
import { tableColumnMock } from "../../data/mockData";
import { NewItemForm } from "../NewItemForm";
import useSoftDeleteItemMutation from "../../hooks/useSoftDeleteItemMutation";

export const HomeBody = () => {
  const [tableData, setTableData] = useItems();
  const deleteMutate = useSoftDeleteItemMutation()

  return (
    <HomeContainer>
      <NewItemForm />

      <Table
        data={tableData}
        columns={tableColumnMock}
        setData={setTableData}
        deleteMutate={deleteMutate}
      />
    </HomeContainer>
  );
};
