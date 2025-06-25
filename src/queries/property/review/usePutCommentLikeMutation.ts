import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleCommentLike } from "@/apis/property/review/putCommentLike";

export const usePutCommentLikeMutation = (reviewId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ commentId, isLiked }: { commentId: number; isLiked: boolean }) =>
      toggleCommentLike(reviewId, commentId, isLiked),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["commentList", reviewId] });
    },
  });
};
