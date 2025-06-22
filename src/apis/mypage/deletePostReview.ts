import axiosInstance from "@/apis/utils/axiosInstance";

export const deletePostReview = async (reviewId: number) => {
  const res = await axiosInstance.delete(`/mypage/reviews/${reviewId}`);
  return res.data.result;
};
