import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";
import { ReviewRequestBodyType } from "@/types/reviewType";

export const usePatchReviewMutation = (reviewId: number) => {
  const queryClient = useQueryClient();

  const patchReview = async (payload: ReviewRequestBodyType) => {
    const res = await axiosInstance.patch(`/reviews/${reviewId}`, payload);
    return res.data.data;
  };

  return useMutation({
    mutationFn: patchReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviewList"] });
    },
  });
};
