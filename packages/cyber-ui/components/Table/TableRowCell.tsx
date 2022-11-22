import { styled } from "../../styles/stitches.config";

import { IColumnType } from ".";
import { DeleteButton } from "../Button";

interface Props<T> {
  item: T;
  column: IColumnType<T>;
  isLastChild: boolean;
  deleteRow: () => void;
}

const TableCell = styled("td", {
  padding: 12,
  fontSize: "1.25rem",
  color: "white",

  //this config aligns items on center of cell
  verticalAlign: "middle",
  textAlign: "center",

  

  "a, input, img, button": {
    verticalAlign: "middle",
    display: "inline-block",
  },
});

export function TableRowCell<T>({
  item,
  column,
  isLastChild,
  deleteRow: deleteRowFN,
}: Props<T>): JSX.Element {
  const handleOnClick = () => {
    deleteRowFN();
  };
  const value = item[column.key];
  return (
    <TableCell>
      {column.render ? column.render(column, item) : <span>{value}</span>}
      {isLastChild && <DeleteButton onClick={handleOnClick} />}
    </TableCell>
  );
}
