import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";
import { ChatItem } from "@/types/chat";

type FetchChatDataPayload = {
  chatRoomId: number;
};

export const fetchChatData = async ({ chatRoomId }: FetchChatDataPayload) => {
  const response = await axiosInstance.post(`/chats/${chatRoomId}`);
  return response.data;
};

export const useChatDataQuery = (chatRoomId: number) => {
  return useQuery<ChatItem>({
    queryKey: ["chatData", chatRoomId],
    queryFn: () => fetchChatData({ chatRoomId }),
    enabled: !!chatRoomId,
  });
};
