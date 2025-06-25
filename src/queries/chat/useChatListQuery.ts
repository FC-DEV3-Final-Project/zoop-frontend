import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";
import { ChatPreviewItem } from "@/types/chat";

type FetchChatListPayload = {
  searchText: string;
};

export const fetchChatList = async ({ searchText }: FetchChatListPayload) => {
  const endpoint = searchText ? `/chats?searchText=${encodeURIComponent(searchText)}` : `/chats`;

  const response = await axiosInstance.get(endpoint);
  return response.data.data;
};

export const useChatListQuery = (searchText: string) => {
  return useQuery<ChatPreviewItem[]>({
    queryKey: ["chatList", searchText],
    queryFn: () => fetchChatList({ searchText }),
  });
};
