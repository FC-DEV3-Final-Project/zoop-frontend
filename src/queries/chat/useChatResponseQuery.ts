import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";
import { AIResponse } from "@/types/chat";

type fetchChatResponsePayload = {
  chatRoomId: number;
};

export const fetchChatResponse = async ({ chatRoomId }: fetchChatResponsePayload) => {
  const response = await axiosInstance.get(`/${chatRoomId}/recent`);
  return response.data;
};

export const useChatResponseQuery = (chatRoomId: number) => {
  return useQuery<AIResponse[]>({
    queryKey: ["chatResponse", chatRoomId],
    queryFn: () => fetchChatResponse({ chatRoomId }),
    enabled: !!chatRoomId,
  });
};
