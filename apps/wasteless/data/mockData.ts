import { ProductPayload, ProductTreated } from "../components/Homebody";

export const dataFromAPIMock: ProductPayload[] = [
  {
    id: "01",
    product: "Bife acebolado",
    expiration: new Date("2023-10-01T10:00:00.000Z"),
    addedDate: new Date("2021-10-01T10:00:00.000Z"),
  },
  {
    id: "02",
    product: "Ovo",
    expiration: new Date("2023-10-01T10:00:00.000Z"),
    addedDate: new Date("2021-10-01T10:00:00.000Z"),
  },
  {
    id: "03",
    product: "Carne de lobisomem",
    expiration: new Date("2021-10-01T10:00:00.000Z"),
    addedDate: new Date("2021-10-01T10:00:00.000Z"),
  },
];

export const dataFromAPIMockAfterTreatment: ProductTreated[] = [
  {
    id: "01",
    product: "Bife acebolado",
    expiration: "01/10/2023",
    addedDate: "01/10/2021",
    timeUntilExpire: "316 dias",
  },
  {
    id: "02",
    product: "Ovo",
    expiration: "01/10/2023",
    addedDate: "01/10/2021",
    timeUntilExpire: "316 dias",
  },
  {
    id: "03",
    product: "Carne de lobisomem",
    expiration: "01/10/2021",
    addedDate: "01/10/2021",
    timeUntilExpire: "Vencido",
  },
];
