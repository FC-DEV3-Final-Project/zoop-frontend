import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteComment } from "@/apis/property/review/deleteComment";

export const useDeleteCommentMutation = (reviewId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (commentId: number) => deleteComment(reviewId, commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["commentList", reviewId] });
    },
  });
};
