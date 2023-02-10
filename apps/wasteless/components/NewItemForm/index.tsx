import React from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import useCreateItemMutation from "../../hooks/useCreateItemMutation";
import {
  NewItemFormData as FieldValues,
  newItemFormValidationSchema,
} from "./zodSchema";
import { BaseButton, Input } from "cyber-ui";

export const NewItemForm = () => {
  const mutate = useCreateItemMutation();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FieldValues>({
    resolver: zodResolver(newItemFormValidationSchema),
  });

  const handleCreateNewItem: SubmitHandler<FieldValues> = (data) => {
    const newItem = {
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
      <BaseButton width={"fullWidth"}>Adicionar Produto</BaseButton>
    </form>
  );
};
