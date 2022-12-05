import { UseMutateFunction, useMutation, useQueryClient } from "react-query";
import { ItemOutput } from "../types";
import { axiosInstance } from "../lib/axiosInstance";
import { queryKeys } from "../lib/react-query/constants";

async function deleteItem(data: ItemOutput): Promise<void> {
  await axiosInstance.patch<ItemOutput>("items/", data);
}

export default function useCreateItemMutation(): UseMutateFunction<
  void,
  unknown,
  ItemOutput,
  unknown
> {
  const queryClient = useQueryClient();

  const { mutate  } = useMutation((item: ItemOutput) => deleteItem(item), {
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
