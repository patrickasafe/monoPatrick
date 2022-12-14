import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import { ItemInput, ItemTreated } from "../components/Homebody";
import { axiosInstance } from "../lib/axiosInstance";
import { queryKeys } from "../lib/react-query/constants";
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
  const { data = fallback } = useQuery(queryKeys.items, getItems);

  const [items, setItems] = useState(itemsInputPayloadTreatment(data));

  useEffect(() => {
    setItems(itemsInputPayloadTreatment(data));
  }, [data]);

  return [items, setItems];
}
