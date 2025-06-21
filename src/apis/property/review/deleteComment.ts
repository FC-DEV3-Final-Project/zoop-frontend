import axiosInstance from "@/apis/utils/axiosInstance";

export const deleteComment = async (reviewId: number, commentId: number) => {
  const res = await axiosInstance.delete(`/reviews/${reviewId}/comments/${commentId}`);
  return res.data;
};
