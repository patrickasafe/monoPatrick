import { globalStyles, Table } from "cyber-ui";

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

      <Table />
    </div>
  );
}
