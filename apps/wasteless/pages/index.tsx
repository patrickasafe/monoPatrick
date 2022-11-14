import { Table, LayoutContainer, Header, HomeContainer } from "cyber-ui";
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
      </LayoutContainer>
      <HomeContainer>
        <form>
          <div>
            Produto
            <input placeholder="produto" />
          </div>
          <div>
            <span>Data de Validade</span>

            <input placeholder="validade" type="date" />
          </div>

          <button>ok</button>
        </form>

        <Table {...tableData} />
      </HomeContainer>
      <div id="Footer"></div>
    </div>
  );
}
