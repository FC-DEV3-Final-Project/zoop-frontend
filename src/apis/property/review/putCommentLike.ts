import axiosInstance from "@/apis/utils/axiosInstance";

export type ToggleCommentLikeResponse = {
  reviewId: number;
  commentId: number;
  userId: number;
  isLiked: boolean;
  likeCount: number;
};

export const toggleCommentLike = async (
  reviewId: number,
  commentId: number,
  isLiked: boolean,
): Promise<ToggleCommentLikeResponse> => {
  const response = await axiosInstance.put(`/reviews/${reviewId}/comments/${commentId}/likes`, {
    isLiked,
  });
  return response.data.data;
};
