import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";
import { ChatPreviewItem } from "@/types/chat";

type FetchChatListPayload = {
  searchText: string;
};

export const fetchChatList = async ({ searchText }: FetchChatListPayload) => {
  const response = await axiosInstance.post("/chats", { searchText });
  return response.data;
};

export const useChatListQuery = (searchText: string) => {
  return useQuery<ChatPreviewItem[]>({
    queryKey: ["chatList", searchText],
    queryFn: () => fetchChatList({ searchText }),
  });
};
