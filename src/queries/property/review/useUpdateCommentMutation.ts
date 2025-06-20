import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";

type UpdateCommentPayload = {
  commentId: number;
  content: string;
};

export const useUpdateCommentMutation = (reviewId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ commentId, content }: UpdateCommentPayload) =>
      axiosInstance.patch(`/reviews/${reviewId}/comments/${commentId}`, { content }),

    onSuccess: () => {
      // 댓글 목록 재요청 .. 실제 api 요청 때 확인 필요
      queryClient.invalidateQueries({ queryKey: ["commentList", reviewId] });
    },
  });
};
