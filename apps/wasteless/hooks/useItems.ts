import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import { axiosInstance } from "../lib/axiosInstance";
import { queryKeys } from "../lib/react-query/constants";
import { ItemInput, ItemTreated } from "../types";
import { itemsInputPayloadTreatment } from "../utils/ItemInputTreatment";

async function getItems(): Promise<ItemInput[] | void> {
  const { data } = await axiosInstance.get("items/");
  return data;
}

// interface of payload
type useItemsPayload = ItemTreated[] | [];

export function useItems(): [
  useItemsPayload,
  React.Dispatch<React.SetStateAction<ItemTreated[]>>
] {
  const fallback: [] = [];
  const { data = fallback, status } = useQuery(queryKeys.items, getItems);

  const [items, setItems] = useState(itemsInputPayloadTreatment([]));

  useEffect(() => {
    if (status === "success") {
      const treatedData = itemsInputPayloadTreatment(data);
      setItems(treatedData);
    }
  }, [data, status]);

  return [items, setItems];
}
