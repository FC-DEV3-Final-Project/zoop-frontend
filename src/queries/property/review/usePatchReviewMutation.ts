import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchReview, PatchReviewRequest } from "@/apis/property/review/patchReview";

export const usePatchReviewMutation = (reviewId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: PatchReviewRequest) => patchReview(reviewId, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviewList"] });
    },
  });
};
