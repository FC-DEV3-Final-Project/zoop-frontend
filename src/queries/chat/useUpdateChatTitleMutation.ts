import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateChatTitle } from "@/apis/sidebar/updateChatTitle";

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
