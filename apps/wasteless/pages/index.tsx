import {
  Refrigerator,
  Table,
  HeaderTitle,
  LayoutContainer,
  HeaderContainer,
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
        <HeaderContainer>
          <HeaderTitle>WASTELESS</HeaderTitle>
          <Refrigerator width={"8rem"} height={"8rem"} fill={"white"} />
        </HeaderContainer>
      </LayoutContainer>
      <div id="body">
        <span>
          Produtos a vencer
          <input placeholder="produto" />
        </span>
        <span>Data de Validade</span>

        <input placeholder="validade" type="date" />

        <button>ok</button>
      </div>
      <div id="Footer">
        <Table {...tableData} />
      </div>
    </div>
  );
}
