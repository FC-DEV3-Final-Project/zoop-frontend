import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";
import { ToggleCommentLikeType } from "@/types/commentType";

export const usePutCommentLikeMutation = (reviewId: number) => {
  const queryClient = useQueryClient();

  const toggleCommentLike = async (
    commentId: number,
    isLiked: boolean,
  ): Promise<ToggleCommentLikeType> => {
    const response = await axiosInstance.put(`/reviews/${reviewId}/comments/${commentId}/likes`, {
      isLiked,
    });
    return response.data.data;
  };

  return useMutation({
    mutationFn: ({ commentId, isLiked }: { commentId: number; isLiked: boolean }) =>
      toggleCommentLike(commentId, isLiked),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["commentList", reviewId] });
    },
  });
};
