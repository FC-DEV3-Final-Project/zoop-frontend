export type Review = {
  reviewId: number;
  nickname: string;
  profileImage: string | null;
  rating: number;
  content: string;
  hasChildren: boolean;
  isResident: boolean;
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

export const fetchReviewList = async (propertyId: number): Promise<Review[]> => {
  const res = await fetch(`/reviews/${propertyId}`);
  if (!res.ok) throw new Error("리뷰 리스트 조회 실패");

  const json: ReviewListResponse = await res.json();
  return json.data.reviews;
};
