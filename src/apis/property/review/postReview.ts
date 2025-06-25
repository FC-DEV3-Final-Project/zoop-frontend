import axiosInstance from "@/apis/utils/axiosInstance";
import { ReviewRequestBodyType } from "@/types/reviewType";

export const postReview = async (propertyId: number, body: ReviewRequestBodyType) => {
  const res = await axiosInstance.post(`/reviews/${propertyId}`, body);
  return res.data.data;
};
