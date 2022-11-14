import {
  Table,
  LayoutContainer,
  Header,
  HomeContainer,
  Input,
  Button,
} from "cyber-ui";
import { useState } from "react";

const data = {
  data: [
    {
      product: "Bife bovino",
      expiration: "12-12-22",
    },
    {
      product: "Bife bovino",
      expiration: "12-12-22",
    },
    {
      product: "Bife bovino",
      expiration: "12-12-22",
    },
  ],
  columns: [
    {
      key: "product",
      title: "Produto",
    },
    {
      key: "expiration",
      title: "Validade",
    },
  ],
};

export default function Home() {
  const [tableData, setTableData] = useState(data);

  return (
    <div>
      <LayoutContainer>
        <Header />
        <span style={{ fontSize: "24px", margin: "1.5rem" }}>
          Evite desperdícios, adicione aqui produtos para controle de validade.{" "}
        </span>
      </LayoutContainer>
      <HomeContainer>
        <form>
          <Input id="product" placeholder="produto" />
          <Input id="expiration" type="date" placeholder="dd-mm-yyyy" />
          <Button> Adicionar Produto</Button>
        </form>

        <Table {...tableData} />
      </HomeContainer>
      <div id="Footer"></div>
    </div>
  );
}
