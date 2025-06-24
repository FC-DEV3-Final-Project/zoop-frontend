import { useQuery } from "@tanstack/react-query";
import fetchPostComment from "@/apis/mypage/fetchPostComment";

export const usePostCommentQuery = () =>
  useQuery({
    queryKey: ["postComment"],
    queryFn: fetchPostComment,
  });
