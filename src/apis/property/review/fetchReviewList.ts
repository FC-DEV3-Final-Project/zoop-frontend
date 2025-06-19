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
  likeCount: number;
  commentCount: number;
  isLikedByMe: boolean;
  isMine: boolean;
};

type ReviewListResponse = {
  status: number;
  message: string;
  data: {
    propertyId: number;
    complexId: number | null;
    reviews: Review[];
  };
};

export const fetchReviewList = async (
  propertyId: number,
  params?: { sort?: "like" | "latest" },
): Promise<Review[]> => {
  const res = await axiosInstance.get<ReviewListResponse>(`/reviews/${propertyId}`, {
    params,
  });
  return res.data.data.reviews;
};
