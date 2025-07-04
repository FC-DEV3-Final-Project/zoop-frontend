import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";
import { ToggleReviewLikeType } from "@/types/reviewType";

export const usePutReviewLikeMutation = () => {
  const queryClient = useQueryClient();

  const toggleReviewLike = async (
    reviewId: number,
    isLiked: boolean,
  ): Promise<ToggleReviewLikeType> => {
    const response = await axiosInstance.put(`/reviews/${reviewId}/likes`, { isLiked });
    return response.data.data;
  };

  return useMutation({
    mutationFn: ({ reviewId, isLiked }: { reviewId: number; isLiked: boolean }) =>
      toggleReviewLike(reviewId, isLiked),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["reviewList"] });
      queryClient.invalidateQueries({ queryKey: ["reviewDetail", variables.reviewId] });
    },
  });
};
