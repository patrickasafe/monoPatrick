import { cleanup } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import {
  convertObjectsDatesPropertiesToStrings,
  rawDataTreatment,
  timeUntilExpireCalculator,
} from "./payloadTreatment";

const dataFromAPIMock = [
  {
    id: "01",
    product: "Bife bovino",
    expiration: new Date("2023-10-01T10:00:00.000Z"),
    addedDate: new Date("2023-10-01T10:00:00.000Z"),
  },
  {
    id: "02",
    product: "Bife bovino",
    expiration: new Date("2023-10-01T10:00:00.000Z"),
    addedDate: new Date("2023-10-01T10:00:00.000Z"),
  },
  {
    id: "03",
    product: "Bife bovino",
    expiration: new Date("2021-10-01T10:00:00.000Z"),
    addedDate: new Date("2021-10-01T10:00:00.000Z"),
  },
];

export const dataFromAPIMockAfterTreatment = [
  {
    id: "01",
    product: "Bife bovino",
    expiration: "01/10/2023",
    addedDate: "01/10/2023",
    timeUntilExpire: "316 dias",
  },
  {
    id: "02",
    product: "Bife bovino",
    expiration: "01/10/2023",
    addedDate: "01/10/2023",
    timeUntilExpire: "316 dias",
  },
  {
    id: "03",
    product: "Bife bovino",
    expiration: "01/10/2021",
    addedDate: "01/10/2021",
    timeUntilExpire: "Vencido",
  },
];

describe("dateToString function test", () => {
  test("Should turn a Date format into a string DD/MM/YY", () => {
    let fixtureDate = dataFromAPIMock;
    expect(rawDataTreatment(fixtureDate, new Date("2022-11-20"))).toStrictEqual(
      dataFromAPIMockAfterTreatment
    );
  });

  test("Should modify an object and inject a 'timeUntilExpire' property", () => {
    let fixtureDate = { ...dataFromAPIMock[0] };
    let testDate = { ...dataFromAPIMock[0], timeUntilExpire: "316 dias" };
    expect(
      timeUntilExpireCalculator(fixtureDate, new Date("2022-11-20"))
    ).toStrictEqual(testDate);
  });

  test("Should turn every Date object's property into strings", () => {
    let fixtureDate = {
      ...dataFromAPIMock[0],
      expiration: "01/10/2023",
      addedDate: "01/10/2023",
    };
    expect(
      convertObjectsDatesPropertiesToStrings(dataFromAPIMock[0])
    ).toStrictEqual(fixtureDate);
  });
});
