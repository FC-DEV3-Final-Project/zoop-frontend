import { useQuery } from "@tanstack/react-query";
import { fetchReviewList } from "@/apis/property/review/fetchReviewList";
import type { Review } from "@/apis/property/review/fetchReviewList";

export const useReviewListQuery = (propertyId: number, params?: { sort?: "like" | "latest" }) =>
  useQuery<Review[]>({
    queryKey: ["reviewList", propertyId, params?.sort],
    queryFn: () => fetchReviewList(propertyId, params),
    enabled: !!propertyId,
  });
