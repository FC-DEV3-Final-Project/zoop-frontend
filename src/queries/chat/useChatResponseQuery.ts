import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";

type fetchChatResponsePayload = {
  chatRoomId: number;
};

export const fetchChatResponse = async ({ chatRoomId }: fetchChatResponsePayload) => {
  const response = await axiosInstance.post(`/${chatRoomId}/recent`);
  return response.data;
};

export const useChatResponseQuery = (chatRoomId: number) => {
  return useQuery({
    queryKey: ["chatResponse", chatRoomId],
    queryFn: () => fetchChatResponse({ chatRoomId }),
    enabled: !!chatRoomId,
  });
};
