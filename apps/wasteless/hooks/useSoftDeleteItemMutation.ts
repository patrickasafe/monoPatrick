import { UseMutateFunction, useMutation, useQueryClient } from "react-query";
import { axiosInstance } from "../lib/axiosInstance";
import { queryKeys } from "../lib/react-query/constants";

export type ItemId = {
  id: string;
};

async function deleteItem(data: ItemId): Promise<void> {
  await axiosInstance.patch<ItemId>("items/", data);
}

export default function useSoftDeleteItemMutation(): UseMutateFunction<
  void,
  unknown,
  ItemId,
  unknown
> {
  const queryClient = useQueryClient();

  const { mutate } = useMutation((itemId: ItemId) => deleteItem(itemId), {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.items]);
      // showNotification({
      //   enabled: true,
      //   type: toast.TYPE.SUCCESS,
      //   message: "Sucessfully created a product"
      // });
    },
  });

  return mutate;
}
