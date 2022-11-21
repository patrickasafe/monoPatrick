import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import { BaseButton, HomeContainer, Input, Table } from "cyber-ui";
import { dataFromAPIMock } from "../../data/mockData";
import { rawDataTreatment } from "../../utils/payloadTreatment";

type Column = {
  key: string;
  title: string;
};

export interface ProductPayload {
  id: string;
  product: string;
  expiration: Date;
  addedDate: Date;
}

export type ProductTreated = {
  id: string;
  product: string;
  expiration: string;
  addedDate: string;
  timeUntilExpire: string;
};

export interface APIPayload {
  data: Array<ProductTreated>;
  columns: Column[];
}

const cookedDataMock = rawDataTreatment(dataFromAPIMock);
console.log(cookedDataMock);

const tableDataMock: APIPayload = {
  data: cookedDataMock,
  columns: [
    {
      key: "product",
      title: "Produto",
    },
    {
      key: "expiration",
      title: "Validade",
    },
    {
      key: "addedDate",
      title: "Data de criação",
    },
    {
      key: "timeUntilExpire",
      title: "Dias até vencer",
    },
  ],
};

const newProductFormValidationSchema = zod.object({
  product: zod
    .string({
      required_error: "Por favor, escreva um nome",
      invalid_type_error: "Esse nome não é válido",
    })
    .min(2, "Insira o nome do alimento")
    .max(20, "Número de caracteres excedido"),

  // this zod validator have a preprocess
  expiration: zod.preprocess(
    (arg) => {
      if (typeof arg === "string" || arg instanceof Date) return new Date(arg);
    },
    zod
      .date({
        required_error: "Por favor, selecione uma data",
        // invalid_type_error: "Essa não é uma data válida",
      })
      .min(new Date(), { message: "Não pode adicionar produto vencido" })
  ),
});

type NewProductFormData = zod.infer<typeof newProductFormValidationSchema>;

export const HomeBody = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(newProductFormValidationSchema),
  });

  const [tableData, setTableData] = useState(tableDataMock.data);

  const handleCreateNewProduct = (data: NewProductFormData) => {
    const id = String(new Date().getTime());
    const newProduct: ProductPayload = {
      id,
      product: data.product,
      expiration: data.expiration,
      addedDate: new Date(),
    };

    setTableData([...tableData, ...rawDataTreatment([newProduct])]);

    reset();
  };

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewProduct)}>
        <Input {...register("product")} />
        {errors.product?.message}
        <Input {...register("expiration")} type="date" />
        {errors.expiration?.message}
        <BaseButton width={"fullWidth"}> Adicionar Produto</BaseButton>
      </form>

      <Table
        data={tableData}
        columns={tableDataMock.columns}
        setData={setTableData}
      />
    </HomeContainer>
  );
};
