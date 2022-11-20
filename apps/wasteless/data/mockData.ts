export const dataFromAPIMock = [
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
