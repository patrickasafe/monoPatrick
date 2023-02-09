import React from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import useCreateItemMutation from "../../hooks/useCreateItemMutation";
import {
  NewItemFormData as FieldValues,
  newItemFormValidationSchema,
} from "./zodSchema";
import { NewItemInputsPlusButton } from "./NewItemInputsPlusButton";

export const NewItemForm = () => {
  const mutate = useCreateItemMutation();

  const { handleSubmit, reset } = useForm<FieldValues>({
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
      <NewItemInputsPlusButton />
    </form>
  );
};
