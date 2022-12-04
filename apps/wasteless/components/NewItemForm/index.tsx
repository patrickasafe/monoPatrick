import React from "react";
import * as zod from "zod";

import { BaseButton, Input } from "cyber-ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useCreateItemMutation from "../../hooks/useCreateItemMutation";


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

export type NewItemFormData = zod.infer<typeof newItemFormValidationSchema>;

export const NewItemForm = () => {
  const mutate = useCreateItemMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(newItemFormValidationSchema),
  });

  const handleCreateNewItem = (data: NewItemFormData) => {
    const newItem: NewItemFormData = {
      name: data.name,
      expiration: data.expiration,
    };

    mutate(newItem);

    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleCreateNewItem)}>
      <Input {...register("name")} />
      {errors.name?.message}
      <Input {...register("expiration")} type="date" />
      {errors.expiration?.message}
      <BaseButton width={"fullWidth"}> Adicionar Produto</BaseButton>
    </form>
  );
};
