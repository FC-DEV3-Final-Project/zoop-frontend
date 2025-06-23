import axiosInstance from "@/apis/utils/axiosInstance";
import { ToggleReviewLikeType } from "@/types/reviewType";

export const toggleReviewLike = async (
  reviewId: number,
  isLiked: boolean,
): Promise<ToggleReviewLikeType> => {
  const response = await axiosInstance.put(`/reviews/${reviewId}/likes`, { isLiked });
  return response.data.data;
};
