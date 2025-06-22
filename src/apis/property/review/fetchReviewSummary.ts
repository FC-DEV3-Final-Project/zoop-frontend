import axiosInstance from "@/apis/utils/axiosInstance";

export type ReviewSummary = {
  good: string[];
  bad: string[];
  tra: string[];
  edu: string[];
  hel: string[];
  loc: string[];
};

export type ReviewSummaryResponse = {
  status: number;
  result: boolean;
  message: string;
  data: ReviewSummary;
};

export const fetchReviewSummary = async (propertyId: number): Promise<ReviewSummary> => {
  const response = await axiosInstance.get<ReviewSummaryResponse>(`/reviews/${propertyId}/summary`);
  return response.data.data;
};
