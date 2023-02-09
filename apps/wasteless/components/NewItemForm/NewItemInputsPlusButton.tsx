import { zodResolver } from "@hookform/resolvers/zod";
import { BaseButton, Input } from "cyber-ui";
import { useForm } from "react-hook-form";
import { newItemFormValidationSchema } from "./zodSchema";

export const NewItemInputsPlusButton = () => {

  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(newItemFormValidationSchema),
  });

  return (
    <>
      <Input {...register("name")} />
      {errors.name?.message}
      <Input {...register("expiration")} type="date" />
      {errors.expiration?.message}
      <BaseButton width={"fullWidth"}>Adicionar Produto</BaseButton>
    </>
  );
};
