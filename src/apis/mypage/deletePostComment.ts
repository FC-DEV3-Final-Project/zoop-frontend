import axiosInstance from "@/apis/utils/axiosInstance";

export const deletePostComment = async (commentId: number) => {
  const res = await axiosInstance.delete(`/mypage/comments/${commentId}`);
  return res.data.result;
};
