import { NewItemFormData } from "./components/NewItemForm/zodSchema";

export type Column = {
  key: string;
  title: string;
};

export interface ItemOutput extends NewItemFormData {}

export interface ItemInput extends ItemOutput {
  id: string;
  createdAt: Date;
}

export type ItemTreated = Required<{
  [keyof: string]: string;
}>;
