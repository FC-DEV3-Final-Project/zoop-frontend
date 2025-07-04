import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";
import { ReviewRequestBodyType } from "@/types/reviewType";

export const usePostReviewMutation = (propertyId: number) => {
  const queryClient = useQueryClient();

  const postReview = async (body: ReviewRequestBodyType) => {
    const res = await axiosInstance.post(`/reviews/${propertyId}`, body);
    return res.data.data;
  };

  return useMutation({
    mutationFn: postReview,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["reviewList", propertyId],
      });
    },
  });
};
