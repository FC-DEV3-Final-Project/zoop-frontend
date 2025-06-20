import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleReviewLike } from "@/apis/property/review/putReviewLike";

export const useToggleReviewLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (reviewId: number) => toggleReviewLike(reviewId),
    onSuccess: (_data, reviewId) => {
      queryClient.invalidateQueries({ queryKey: ["reviewList"] });
      queryClient.invalidateQueries({ queryKey: ["reviewDetail", reviewId] });
    },
  });
};
