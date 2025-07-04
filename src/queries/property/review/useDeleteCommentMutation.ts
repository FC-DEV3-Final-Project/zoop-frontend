import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";

export const useDeleteCommentMutation = (
  reviewId: number,
  propertyId: number,
  currentReviewSort: "like" | "latest",
) => {
  const queryClient = useQueryClient();

  const deleteComment = async (commentId: number) => {
    const res = await axiosInstance.delete(`/reviews/${reviewId}/comments/${commentId}`);
    return res.data;
  };

  return useMutation({
    mutationFn: deleteComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["commentList", reviewId] });
      queryClient.invalidateQueries({ queryKey: ["reviewList", propertyId, currentReviewSort] });
    },
  });
};
