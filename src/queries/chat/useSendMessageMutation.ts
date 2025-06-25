import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";

interface SendMessagePayload {
  chatRoomId: number | null;
  content: string;
}

export const postMessage = async (payload: SendMessagePayload) => {
  const response = await axiosInstance.post("/chats", payload);
  return response.data;
};

export const useSendMessageMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postMessage,
    onSuccess: () => {
      // 채팅방 쿼리 갱신
      queryClient.invalidateQueries({ queryKey: ["chatData"] });
    },
  });
};
