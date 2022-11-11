import { Table } from "cyber-ui";

export interface IColumnType<T> {
  key: string;
  title: string;
  width?: number;
  render?: (column: IColumnType<T>, item: T) => void;
}

interface Props<T> {
  data: T[];
  columns: IColumnType<T>[];
}

const data = {
  data: [
    {
      product: "Bife bovino",
      expiration: "12-12-22"
    },
    {
      product: "Bife bovino",
      expiration: "12-12-22"
    },
    {
      product: "Bife bovino",
      expiration: "12-12-22"
    }
  ],
  columns: [
    {
      key: "product",
      title: "Produto"
    },
    {
      key: "expiration",
      title: "Validade"
    }
  ]
};

export default function Home() {
  return (
    <div>
      <span>
        Produtos a vencer
        <input placeholder="produto" />
      </span>
      <span>Data de Validade</span>

      <input placeholder="validade" type="date" />

      <button>ok</button>

      <Table {...data} />
    </div>
  );
}
