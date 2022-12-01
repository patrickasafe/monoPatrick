import { UseMutateFunction, useMutation, useQueryClient } from "react-query";
import { ItemOutput } from "../components/Homebody";
import { axiosInstance } from "../lib/axiosInstance";
import { queryKeys } from "../lib/react-query/constants";

async function postItem(data: ItemOutput): Promise<void> {
  await axiosInstance.post<ItemOutput>("items/", data);
}

export default function useCreateItemMutation(): UseMutateFunction<
  void,
  unknown,
  ItemOutput,
  unknown
> {
  const queryClient = useQueryClient();

  const { mutate } = useMutation((item: ItemOutput) => postItem(item), {
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
