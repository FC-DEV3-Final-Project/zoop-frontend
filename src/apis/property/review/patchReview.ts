import axiosInstance from "@/apis/utils/axiosInstance";
import { ReviewRequestBodyType } from "@/types/reviewType";

export const patchReview = async (reviewId: number, payload: ReviewRequestBodyType) => {
  const res = await axiosInstance.patch(`/reviews/${reviewId}`, payload);
  return res.data.data;
};
