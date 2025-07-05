import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";

const deletePostReview = async (reviewId: number) => {
  const res = await axiosInstance.delete(`/mypage/reviews/${reviewId}`);
  return res.data.result;
};

export const useDeletePostReviewMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (reviewId: number) => deletePostReview(reviewId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["postReview"] });
      queryClient.invalidateQueries({ queryKey: ["postComment"] });
    },
  });
};
