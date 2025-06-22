import axiosInstance from "@/apis/utils/axiosInstance";

export type PatchReviewRequest = {
  rating: number;
  content: string;
  hasChildren: "HAS_CHILDREN" | "NON_CHILDREN";
  isResident: "CURRENT_RESIDENT" | "PAST_RESIDENT" | "NON_RESIDENT";
};

export const patchReview = async (reviewId: number, payload: PatchReviewRequest) => {
  const res = await axiosInstance.patch(`/reviews/${reviewId}`, payload);
  return res.data.data;
};
