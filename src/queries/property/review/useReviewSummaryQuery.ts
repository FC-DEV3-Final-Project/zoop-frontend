import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";
import type { ReviewSummary, ReviewSummaryResponse } from "@/types/reviewType";

export const useReviewSummaryQuery = (propertyId: number) => {
  const fetchReviewSummary = async (): Promise<ReviewSummary> => {
    const response = await axiosInstance.get<ReviewSummaryResponse>(
      `/reviews/${propertyId}/summary`,
    );
    return response.data.data;
  };

  return useQuery<ReviewSummary, Error>({
    queryKey: ["reviewSummary", propertyId],
    queryFn: fetchReviewSummary,
    enabled: !!propertyId,
    retry: 0,
    staleTime: 1000 * 60 * 5,
  });
};
