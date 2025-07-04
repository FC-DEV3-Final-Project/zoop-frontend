import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";

export const usePostCommentMutation = (
  reviewId: number,
  propertyId: number,
  currentSort: "like" | "latest",
) => {
  const queryClient = useQueryClient();

  const postComment = async (content: string) => {
    const response = await axiosInstance.post(`/reviews/${reviewId}/comments`, { content });
    return response.data.data;
  };

  return useMutation({
    mutationFn: postComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["commentList", reviewId] });
      queryClient.refetchQueries({ queryKey: ["reviewList", propertyId, currentSort] });
    },
  });
};
