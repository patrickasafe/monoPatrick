import { styled } from "../../styles/stitches.config";

import { IColumnType } from ".";

interface Props<T> {
  columns: IColumnType<T>[];
}

const TableHeaderCell = styled("th", {
  backgroundColor: "$gray4",
  padding: 12,
  fontWeight: 500,
  textAlign: "left",
  fontSize: "1.5rem",
  color: "white",
  "&:first-child": {
    borderTopLeftRadius: 12,
  },
  "&:last-child": {
    borderTopRightRadius: 12,
  },
});

export function TableHeader<T>({ columns }: Props<T>): JSX.Element {
  return (
    <tr>
      {columns?.map((column, columnIndex) => (
        <TableHeaderCell
          key={`table-head-cell-${columnIndex}`}
          style={{ width: column.width }}
        >
          {column.title}
        </TableHeaderCell>
      ))}
    </tr>
  );
}
