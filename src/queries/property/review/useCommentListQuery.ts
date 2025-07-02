import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";
import type { CommentType } from "@/types/commentType";

export const useCommentListQuery = (reviewId: number) => {
  const fetchComments = async (): Promise<CommentType[]> => {
    const res = await axiosInstance.get(`/reviews/${reviewId}/comments`);
    return res.data?.data ?? [];
  };

  return useQuery<CommentType[]>({
    queryKey: ["commentList", reviewId],
    queryFn: fetchComments,
    enabled: !!reviewId,
  });
};
