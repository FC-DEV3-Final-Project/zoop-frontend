import { useQuery } from "@tanstack/react-query";
import { fetchReviewSummary } from "@/apis/property/review/fetchReviewSummary";
import type { ReviewSummary } from "@/types/reviewType";

export const useReviewSummaryQuery = (propertyId: number) =>
  useQuery<ReviewSummary, Error>({
    queryKey: ["reviewSummary", propertyId],
    queryFn: () => fetchReviewSummary(propertyId),
    enabled: !!propertyId,
    // 이미 정보 없는 AI 리뷰 (머신 데이터 X) 일 때 계속 Skeleton & try 방지.. 임시입니다
    retry: 0,
    staleTime: 1000 * 60 * 5,
  });
