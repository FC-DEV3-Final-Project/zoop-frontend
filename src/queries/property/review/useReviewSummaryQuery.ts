import { useQuery } from "@tanstack/react-query";
import { fetchReviewSummary } from "@/apis/property/review/fetchReviewSummary";

export const useReviewSummaryQuery = (propertyId: number) =>
  useQuery({
    queryKey: ["reviewSummary", propertyId],
    queryFn: () => fetchReviewSummary(propertyId),
    enabled: !!propertyId,
  });
