import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteComment } from "@/apis/property/review/deleteComment";

export const useDeleteCommentMutation = (
  reviewId: number,
  propertyId: number,
  currentReviewSort: "like" | "latest",
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (commentId: number) => deleteComment(reviewId, commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["commentList", reviewId] });
      queryClient.invalidateQueries({ queryKey: ["reviewList", propertyId, currentReviewSort] });
    },
  });
};
