import axiosInstance from "@/apis/utils/axiosInstance";
import { ReviewListData, ReviewListResponse } from "../../../types/reviewType";

export const fetchReviewList = async (
  propertyId: number,
  params?: { sort?: "like" | "latest" },
): Promise<ReviewListData> => {
  const res = await axiosInstance.get<ReviewListResponse>(`/reviews/${propertyId}`);
  const data = res.data.data;

  if (params?.sort === "like") {
    data.reviews.sort((a, b) => b.likeCount - a.likeCount); // 공감 수 많은 순
  } else {
    data.reviews.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(), // 최신순
    );
  }

  return data;
};
