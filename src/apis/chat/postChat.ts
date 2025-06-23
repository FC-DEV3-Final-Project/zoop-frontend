import axiosInstance from "@/apis/utils/axiosInstance";

export const postChat = async () => {
  const response = await axiosInstance.post("/chats/new");
  return response.data;
};
