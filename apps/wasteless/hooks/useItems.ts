import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import { axiosInstance } from "../lib/axiosInstance";
import { queryKeys } from "../lib/react-query/constants";
import { ItemInput, ItemTreated } from "../types";
import { itemsInputPayloadTreatment } from "../utils/ItemInputTreatment";

async function getItems(): Promise<ItemInput[] | void> {
  try {
    const { data } = await axiosInstance.get("items/");
    return data;
  } catch (err) {
    console.error(err);
  }
}

// interface of payload
type useItemsPayload = ItemTreated[] | [];

export function useItems(): [
  useItemsPayload,
  React.Dispatch<React.SetStateAction<ItemTreated[]>>
] {
  const fallback: [] = [];
  const { data = fallback, isSuccess } = useQuery(queryKeys.items, getItems);

  const [items, setItems] = useState(itemsInputPayloadTreatment([]));

  useEffect(() => {
    if (isSuccess) {
      const treatedData = itemsInputPayloadTreatment(data);
      setItems(treatedData);
    }
  }, [data, isSuccess]);

  return [items, setItems];
}
