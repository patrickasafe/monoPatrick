import { fireEvent, getByText, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { TableRowCell } from "./TableRowCell";

const tableRowCellFixture = {
  column: { key: "any", title: "Any" },
  item: { any: "thing" },
  isLastChild: false,
  deleteRow: () => {},
};

describe("TableRowCell component specs", () => {
  test("Should render a TableRowCell", () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableRowCell {...tableRowCellFixture} />
          </tr>
        </tbody>
      </table>
    );
    expect(screen.getByText(tableRowCellFixture.item.any));
  });

  test("Should render DeleteButton inside the TableRowCell", () => {
    tableRowCellFixture.isLastChild = true;
    render(
      <table>
        <tbody>
          <tr>
            <TableRowCell {...tableRowCellFixture} />
          </tr>
        </tbody>
      </table>
    );
    expect(screen.getByRole("button"));
  });
});
