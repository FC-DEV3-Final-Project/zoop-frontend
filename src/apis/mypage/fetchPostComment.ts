import axiosInstance from "@/apis/utils/axiosInstance";

const fetchPostComment = async () => {
  try {
    const res = await axiosInstance.get("/mypage/comments");
    return res.data.comments;
  } catch (error) {
    console.error("fetchPostComment 에러:", error);
    throw new Error("댓글을 불러오는데 실패했습니다");
  }
};

export default fetchPostComment;
