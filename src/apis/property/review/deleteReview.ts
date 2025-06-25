import axiosInstance from "@/apis/utils/axiosInstance";

export const deleteReview = async (reviewId: number) => {
  const res = await axiosInstance.delete(`/reviews/${reviewId}`);
  return res.data;
};
