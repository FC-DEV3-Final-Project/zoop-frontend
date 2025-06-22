import axiosInstance from "@/apis/utils/axiosInstance";

export type ToggleReviewLikeResponse = {
  reviewId: number;
  userId: number;
  isLiked: boolean;
};

export const toggleReviewLike = async (
  reviewId: number,
  isLiked: boolean,
): Promise<ToggleReviewLikeResponse> => {
  const response = await axiosInstance.put(`/reviews/${reviewId}/likes`, { isLiked });
  return response.data.data;
};
