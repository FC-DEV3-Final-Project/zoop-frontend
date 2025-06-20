import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteReview } from "@/apis/property/review/deleteReview";

export const useDeleteReviewMutation = (propertyId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (reviewId: number) => deleteReview(reviewId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviewList", propertyId] });
    },
  });
};
