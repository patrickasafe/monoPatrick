import { NewItemFormData } from "./components/NewItemForm/zodSchema";

export type Column = {
  key: string;
  title: string;
};

export interface ItemOutput extends NewItemFormData { }

export interface ItemInput extends ItemOutput {
  id: string;
  createdAt: Date;
}

export type ItemTreated = {
  id: string;
  name: string;
  expiration: string;
  createdAt: string;
  timeUntilExpire: string;
};
