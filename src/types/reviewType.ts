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

export type ReviewRequestBodyType = {
  rating: number;
  content: string;
  hasChildren: HasChildrenStatus;
  isResident: ResidentStatus;
};

export type ToggleReviewLikeType = {
  reviewId: number;
  userId: number;
  isLiked: boolean;
};

export type ReviewSummary = {
  good: string[];
  bad: string[];
  tra: string[];
  edu: string[];
  hel: string[];
  loc: string[];
};

export type ReviewSummaryResponse = {
  status: number;
  result: boolean;
  message: string;
  data: ReviewSummary;
};
