import * as zod from "zod";

export const newItemFormValidationSchema = zod.object({
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
