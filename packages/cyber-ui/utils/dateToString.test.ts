import { describe, expect, test } from "vitest";
import { dateToString } from "./dateToString";

describe("dateToString function test", () => {
  test("Should turn a Date format into a string DD/MM/YY", () => {
    let fixtureDate = new Date();
    expect(dateToString(fixtureDate)).toBe(
      fixtureDate.toLocaleDateString("pt-BR")
    );
  });
});
