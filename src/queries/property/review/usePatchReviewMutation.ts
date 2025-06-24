import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchReview } from "@/apis/property/review/patchReview";
import { ReviewRequestBodyType } from "@/types/reviewType";

export const usePatchReviewMutation = (reviewId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: ReviewRequestBodyType) => patchReview(reviewId, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviewList"] });
    },
  });
};
