import { ItemInput, ItemTreated } from "../components/Homebody";

export const dataFromAPIMock: ItemInput[] = [
  {
    id: "01",
    name: "Bife acebolado",
    expiration: new Date("2023-10-01T10:00:00.000Z"),
    created_at: new Date("2021-10-01T10:00:00.000Z"),
  },
  {
    id: "02",
    name: "Ovo",
    expiration: new Date("2023-10-01T10:00:00.000Z"),
    created_at: new Date("2021-10-01T10:00:00.000Z"),
  },
  {
    id: "03",
    name: "Carne de lobisomem",
    expiration: new Date("2021-10-01T10:00:00.000Z"),
    created_at: new Date("2021-10-01T10:00:00.000Z"),
  },
];

export const dataFromAPIMockAfterTreatment: ItemTreated[] = [
  {
    id: "01",
    name: "Bife acebolado",
    expiration: "01/10/2023",
    created_at: "01/10/2021",
    timeUntilExpire: "316 dias",
  },
  {
    id: "02",
    name: "Ovo",
    expiration: "01/10/2023",
    created_at: "01/10/2021",
    timeUntilExpire: "316 dias",
  },
  {
    id: "03",
    name: "Carne de lobisomem",
    expiration: "01/10/2021",
    created_at: "01/10/2021",
    timeUntilExpire: "Vencido",
  },
];
