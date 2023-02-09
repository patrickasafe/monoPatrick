import { Column } from "../types";

export const dataFromAPIMock = [
  {
    id: "01",
    name: "Bife acebolado",
    expiration: new Date("2023-10-01T10:00:00.000Z"),
    createdAt: new Date("2021-10-01T10:00:00.000Z"),
  },
  {
    id: "02",
    name: "Ovo",
    expiration: new Date("2023-10-01T10:00:00.000Z"),
    createdAt: new Date("2021-10-01T10:00:00.000Z"),
  },
  {
    id: "03",
    name: "Carne de lobisomem",
    expiration: new Date("2021-10-01T10:00:00.000Z"),
    createdAt: new Date("2021-10-01T10:00:00.000Z"),
  },
];

export const dataFromAPIMockAfterTreatment = [
  {
    id: "01",
    name: "Bife acebolado",
    expiration: "01/10/2023",
    createdAt: "01/10/2021",
    timeUntilExpire: "316 dias",
  },
  {
    id: "02",
    name: "Ovo",
    expiration: "01/10/2023",
    createdAt: "01/10/2021",
    timeUntilExpire: "316 dias",
  },
  {
    id: "03",
    name: "Carne de lobisomem",
    expiration: "01/10/2021",
    createdAt: "01/10/2021",
    timeUntilExpire: "Vencido",
  },
];

export const tableColumnMock: Column[] = [
  {
    key: "name",
    title: "Produto",
  },
  {
    key: "expiration",
    title: "Validade",
  },
  {
    key: "createdAt",
    title: "Data de criação",
  },
  {
    key: "timeUntilExpire",
    title: "Dias até vencer",
  },
];
