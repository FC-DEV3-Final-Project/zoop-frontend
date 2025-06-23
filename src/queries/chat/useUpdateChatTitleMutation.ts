import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";

type UpdateChatTitlePayload = {
  chatRoomId: number;
  newTitle: string;
};

export const updateChatTitle = async ({ chatRoomId, newTitle }: UpdateChatTitlePayload) => {
  const response = await axiosInstance.patch(`/chats/${chatRoomId}`, {
    title: newTitle,
  });
  return response.data;
};

export const useUpdateChatTitle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateChatTitle,
    onSuccess: () => {
      // 채팅방 목록 쿼리 갱신
      queryClient.invalidateQueries({ queryKey: ["chatList"] });
    },
    onError: (error) => {
      alert(`채팅방 제목 수정에 실패했어요. ${error}`);
    },
  });
};
