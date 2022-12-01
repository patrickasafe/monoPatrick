import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import { BaseButton, HomeContainer, Input, Table } from "cyber-ui";
import { dataFromAPIMock } from "../../data/mockData";
import { itemsInputPayloadTreatment } from "../../utils/ItemInputTreatment";
import { axiosInstance } from "../../lib/axiosInstance";
import { useItems } from "../../hooks/useItems";
import useCreateItemMutation from "../../hooks/useCreateItemMutation";

type Column = {
  key: string;
  title: string;
};

export interface ItemOutput {
  name: string;
  expiration: Date;
}

export interface ItemInput extends ItemOutput {
  id: string;
  created_at: Date;
}

export type ItemTreated = {
  id: string;
  name: string;
  expiration: string;
  created_at: string;
  timeUntilExpire: string;
};

const tableColumnMock: Column[] = [
  {
    key: "name",
    title: "Produto",
  },
  {
    key: "expiration",
    title: "Validade",
  },
  {
    key: "created_at",
    title: "Data de criação",
  },
  {
    key: "timeUntilExpire",
    title: "Dias até vencer",
  },
];

const newItemFormValidationSchema = zod.object({
  name: zod
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

type NewItemFormData = zod.infer<typeof newItemFormValidationSchema>;

export const HomeBody = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(newItemFormValidationSchema),
  });

  const [tableData, setTableData] = useItems();
  const mutate = useCreateItemMutation();

  const handleCreateNewItem = (data: NewItemFormData) => {
    const newItem: ItemOutput = {
      name: data.name,
      expiration: data.expiration,
    };

    mutate(newItem);

    reset();
  };

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewItem)}>
        <Input {...register("name")} />
        {errors.name?.message}
        <Input {...register("expiration")} type="date" />
        {errors.expiration?.message}
        <BaseButton width={"fullWidth"}> Adicionar Produto</BaseButton>
      </form>

      <Table
        data={tableData}
        columns={tableColumnMock}
        setData={setTableData}
      />
    </HomeContainer>
  );
};
