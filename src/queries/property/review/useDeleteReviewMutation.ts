import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";

export const useDeleteReviewMutation = (propertyId: number) => {
  const queryClient = useQueryClient();

  const deleteReview = async (reviewId: number) => {
    const res = await axiosInstance.delete(`/reviews/${reviewId}`);
    return res.data;
  };

  return useMutation({
    mutationFn: deleteReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviewList", propertyId] });
    },
  });
};
