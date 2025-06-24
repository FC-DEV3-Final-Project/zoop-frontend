import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleReviewLike } from "@/apis/property/review/putReviewLike";

export const usePutReviewLikeMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ reviewId, isLiked }: { reviewId: number; isLiked: boolean }) =>
      toggleReviewLike(reviewId, isLiked),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["reviewList"] });
      queryClient.invalidateQueries({ queryKey: ["reviewDetail", variables.reviewId] });
    },
  });
};
