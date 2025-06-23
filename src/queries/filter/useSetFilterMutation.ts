import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";
import { FilterPayload } from "@/types/filter";

export const postChatFilter = async (payload: FilterPayload) => {
  const response = await axiosInstance.post("/chats/filters", payload);
  return response.data;
};

export const useSetFilterMutation = () => {
  return useMutation({
    mutationFn: (payload: FilterPayload) => postChatFilter(payload),
  });
};
