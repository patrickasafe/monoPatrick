import React from "react";

import { BaseButton, Input } from "cyber-ui";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import useCreateItemMutation from "../../hooks/useCreateItemMutation";
import {
  NewItemFormData as FieldValues,
  newItemFormValidationSchema,
} from "./zodSchema";

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

  const handleCreateNewItem: SubmitHandler<FieldValues> = (data) => {
    const newItem: FieldValues = {
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
