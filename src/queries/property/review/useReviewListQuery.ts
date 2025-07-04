import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";
import type { ReviewListData, ReviewListResponse } from "@/types/reviewType";

export const useReviewListQuery = (propertyId: number, params?: { sort?: "like" | "latest" }) => {
  const fetchReviewList = async (): Promise<ReviewListData> => {
    const res = await axiosInstance.get<ReviewListResponse>(`/reviews/${propertyId}`);
    const data = res.data.data;

    if (params?.sort === "like") {
      data.reviews.sort((a, b) => b.likeCount - a.likeCount);
    } else {
      data.reviews.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
    }

    return data;
  };

  return useQuery<ReviewListData>({
    queryKey: ["reviewList", propertyId, params?.sort],
    queryFn: fetchReviewList,
    enabled: !!propertyId,
  });
};
