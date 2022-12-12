import { UseMutateFunction, useMutation, useQueryClient } from "react-query";
import { axiosInstance } from "../lib/axiosInstance";
import { queryKeys } from "../lib/react-query/constants";

type ItemID = {
  id: string;
};

async function deleteItem(data: ItemID): Promise<void> {
  await axiosInstance.patch<ItemID>("items/", data);
}

export default function useSoftDeleteItemMutation(): UseMutateFunction<
  void,
  unknown,
  ItemID,
  unknown
> {
  const queryClient = useQueryClient();

  const { mutate } = useMutation((itemID: ItemID) => deleteItem(itemID), {
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
