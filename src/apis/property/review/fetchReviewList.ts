import axiosInstance from "@/apis/utils/axiosInstance";

export type HasChildrenStatus = "NON_CHILDREN" | "HAS_CHILDREN";
export type ResidentStatus = "NON_RESIDENT" | "CURRENT_RESIDENT" | "PAST_RESIDENT";

export type Review = {
  reviewId: number;
  nickname: string;
  profileImage: string | null;
  rating: number;
  content: string;
  hasChildren: HasChildrenStatus;
  isResident: ResidentStatus;
  createdAt: string;
  updatedAt: string | null;
  likeCount: number;
  commentCount: number;
  isLikedByMe: boolean;
  isMine: boolean;
};

export type ReviewListData = {
  propertyId: number;
  complexId: number | null;
  avgRating: number;
  reviews: Review[];
};

export type ReviewListResponse = {
  status: number;
  message: string;
  data: ReviewListData;
};

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
