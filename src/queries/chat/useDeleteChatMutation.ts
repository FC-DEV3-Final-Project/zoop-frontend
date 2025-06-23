import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";

type DeleteChatPayload = {
  chatRoomId: number;
};

export const deleteChat = async ({ chatRoomId }: DeleteChatPayload) => {
  const response = await axiosInstance.delete(`/chats/${chatRoomId}`);
  return response.data;
};

export const useDeleteChatMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteChat,
    onSuccess: () => {
      // 채팅방 목록 쿼리 갱신
      queryClient.invalidateQueries({ queryKey: ["chatList"] });
    },
    onError: (error) => {
      alert(`채팅방 삭제에 실패했어요. ${error}`);
    },
  });
};
