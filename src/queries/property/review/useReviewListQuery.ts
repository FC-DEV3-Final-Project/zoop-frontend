import { useQuery } from "@tanstack/react-query";
import { fetchReviewList } from "@/apis/property/review/fetchReviewList";
import type { ReviewListData } from "@/apis/property/review/fetchReviewList";

export const useReviewListQuery = (propertyId: number, params?: { sort?: "like" | "latest" }) =>
  useQuery<ReviewListData>({
    queryKey: ["reviewList", propertyId, params?.sort],
    queryFn: () => fetchReviewList(propertyId, params),
    enabled: !!propertyId,
  });
