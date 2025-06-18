import axiosInstance from "@/apis/utils/axiosInstance";

export type ReviewRequestBody = {
  complexId: number | null;
  rating: number;
  content: string;
  hasChildren: "HAS_CHILDREN" | "NON_CHILDREN";
  isResident: "CURRENT_RESIDENT" | "PAST_RESIDENT" | "NON_RESIDENT";
};

export const postReview = async (propertyId: number, body: ReviewRequestBody) => {
  const res = await axiosInstance.post(`/reviews/${propertyId}`, body);
  return res.data.data;
};
