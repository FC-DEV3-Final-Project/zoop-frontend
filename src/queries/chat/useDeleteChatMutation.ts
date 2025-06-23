import { deleteChat } from "@/apis/sidebar/deleteChat";
import { useMutation, useQueryClient } from "@tanstack/react-query";

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
