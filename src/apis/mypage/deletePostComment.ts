import axiosInstance from "@/apis/utils/axiosInstance";

const deletePostComment = async (commentId: number) => {
  const res = await axiosInstance.delete(`/mypage/comments/${commentId}`);
  return res.data.result;
};

export default deletePostComment;