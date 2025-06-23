import axiosInstance from "@/apis/utils/axiosInstance";
import { ReviewSummary, ReviewSummaryResponse } from "../../../types/reviewType";

export const fetchReviewSummary = async (propertyId: number): Promise<ReviewSummary> => {
  const response = await axiosInstance.get<ReviewSummaryResponse>(`/reviews/${propertyId}/summary`);
  return response.data.data;
};
