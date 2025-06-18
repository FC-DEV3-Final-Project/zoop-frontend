import { useQuery } from "@tanstack/react-query";
import fetchPosts from "@/apis/mypage/fetchPosts";
import { PostData } from "@/types/post";

export const usePostsQuery = () =>
  useQuery<PostData>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
