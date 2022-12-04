import { HomeContainer, Table } from "cyber-ui";
import { useItems } from "../../hooks/useItems";
import { tableColumnMock } from "../../data/mockData";
import { NewItemForm } from "../NewItemForm";

export const HomeBody = () => {
  const [tableData, setTableData] = useItems();

  return (
    <HomeContainer>
      
      <NewItemForm />

      <Table
        data={tableData}
        columns={tableColumnMock}
        setData={setTableData}
      />
    </HomeContainer>
  );
};
