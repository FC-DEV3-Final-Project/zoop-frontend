import axiosInstance from "@/apis/utils/axiosInstance";
import { ToggleCommentLikeType } from "@/types/commentType";

export const toggleCommentLike = async (
  reviewId: number,
  commentId: number,
  isLiked: boolean,
): Promise<ToggleCommentLikeType> => {
  const response = await axiosInstance.put(`/reviews/${reviewId}/comments/${commentId}/likes`, {
    isLiked,
  });
  return response.data.data;
};
