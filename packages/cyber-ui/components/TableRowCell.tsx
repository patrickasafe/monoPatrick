import { styled } from "../styles/stitches.config";

import get from "lodash.get";

import { IColumnType } from "./Table";

interface Props<T> {
  item: T;
  column: IColumnType<T>;
}

const TableCell = styled("td", {
  padding: 12,
  fontSize: '1.25rem',
  color: "white",
});

export function TableRowCell<T>({ item, column }: Props<T>): JSX.Element {
  const value = get(item, column.key);
  return (
    <TableCell>{column.render ? column.render(column, item) : value}</TableCell>
  );
}
