import { SetStateAction } from "react";
import { styled } from "../../styles/stitches.config";

import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";

export interface IColumnType<T> {
  key: string;
  title: string;
  width?: number;
  render?: (column: IColumnType<T>, item: T) => void;
}

interface Props<T> {
  data: T[];
  columns: IColumnType<T>[];
  setData: (value: SetStateAction<T>) => void;
}

const TableWrapper = styled("table", {
  borderCollapse: "collapse",
  border: "none",
  fontFamily: "Anek Telugu",
  margin: 16,
});

export function Table<T>({ data, columns, setData }: Props<T>): JSX.Element {
  return (
    <TableWrapper>
      <thead>
        <TableHeader columns={columns} />
      </thead>
      <tbody>
        <TableRow data={data} columns={columns} setData={setData} />
      </tbody>
    </TableWrapper>
  );
}
