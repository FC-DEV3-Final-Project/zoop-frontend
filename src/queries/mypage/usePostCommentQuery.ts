import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";

const fetchPostComment = async () => {
  const res = await axiosInstance.get("/mypage/comments");
  return res.data.data || [];
};

export const usePostCommentQuery = () =>
  useQuery({
    queryKey: ["postComment"],
    queryFn: fetchPostComment,
  });
