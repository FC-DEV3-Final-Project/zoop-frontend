import axiosInstance from "@/apis/utils/axiosInstance";

const fetchPostComment = async () => {
  const res = await axiosInstance.get("/mypage/comments");
  return res.data.data.comments;
};

export default fetchPostComment;
