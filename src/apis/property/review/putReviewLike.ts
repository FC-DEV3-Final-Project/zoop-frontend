import axiosInstance from "@/apis/utils/axiosInstance";

export type ToggleReviewLikeResponse = {
  reviewId: number;
  userId: number;
  isLiked: boolean;
};

export const toggleReviewLike = async (reviewId: number): Promise<ToggleReviewLikeResponse> => {
  const response = await axiosInstance.put(`/reviews/${reviewId}/likes`);
  return response.data.data;
};
