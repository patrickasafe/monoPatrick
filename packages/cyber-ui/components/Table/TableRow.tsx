import { styled } from "../../styles/stitches.config";

import { IColumnType } from ".";
import { TableRowCell } from "./TableRowCell";
import { SetStateAction } from "react";
import { UseMutateFunction } from "react-query";

interface Props<T> {
  data: T[];
  columns: IColumnType<T>[];
  setData: (value: SetStateAction<T>) => void;
  deleteMutate: UseMutateFunction<void, unknown, T, unknown>
}

const TableRowItem = styled("tr", {
  cursor: "auto",
  "&:nth-child(odd)": {
    backgroundColor: "#2b2a33",
  },
  "&:last-child": {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
});

export function TableRow<T>({
  data,
  columns,
  setData: setTableData,
  deleteMutate
}: Props<T>): JSX.Element {
  return (
    <>
      {data?.map((item, itemIndex) => (
        <TableRowItem key={`table-body-${itemIndex}`}>
          {columns.map((column, columnIndex) => {
            const deleteRow = () => {
              const deleteItemID = {id: item.id}
              deleteMutate(deleteItemID)
              let copy = [...data];
              copy = copy.filter((_item, index) => itemIndex != index);
              setTableData(copy);
            };

            return (
              <TableRowCell
                key={`table-row-cell-${columnIndex}`}
                item={item}
                column={column}
                isLastChild={columnIndex + 1 === columns.length ? true : false}
                deleteRow={deleteRow}
              />
            );
          })}
        </TableRowItem>
      ))}
    </>
  );
}
