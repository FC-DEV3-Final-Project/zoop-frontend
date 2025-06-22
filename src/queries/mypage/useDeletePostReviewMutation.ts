import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePostReview } from "@/apis/mypage/deletePostReview";

export const useDeletePostReviewMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (reviewId: number) => deletePostReview(reviewId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["postReview"] });
    },
  });
};
