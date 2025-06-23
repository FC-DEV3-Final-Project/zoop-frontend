import axiosInstance from "@/apis/utils/axiosInstance";
import { FilterPayload } from "@/types/filter";

export const postChatFilterSettings = async (payload: FilterPayload) => {
  const response = await axiosInstance.post("/chats/filters", payload);
  return response.data;
};
