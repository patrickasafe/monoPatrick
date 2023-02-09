import { styled } from "../../styles/stitches.config";

import { IColumnType } from ".";
import { DeleteButton } from "../Button";

interface Props<T> {
  item: T;
  column: IColumnType<T>;
  isLastColumn: boolean;
  deleteRow: () => void;
}

const TableCell = styled("td", {
  padding: "1px",
  fontSize: "1.25rem",
  color: "white",

  //this config aligns items on center of cell
  verticalAlign: "middle",
  textAlign: "center",

  "a, input, img, button, span": {
    verticalAlign: "middle",
    display: "inline-block",
  },
});

export function TableRowCell<T>({
  item,
  column,
  isLastColumn: isLastChild,
  deleteRow: deleteRowFN,
}: Props<T>): JSX.Element {
  const handleOnClick = () => {
    deleteRowFN();
  };
  // @ts-ignore
  const value = item[column.key];
  return (
    <TableCell>
      <>
        {column.render ? column.render(column, item) : <span>{value}</span>}
        {isLastChild && <DeleteButton onClick={handleOnClick} />}
      </>
    </TableCell>
  );
}
