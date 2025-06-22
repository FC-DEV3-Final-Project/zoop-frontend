import { useQuery } from "@tanstack/react-query";
import { fetchComments } from "@/apis/property/review/fetchComments";
import type { Comment } from "@/apis/property/review/fetchComments";

export const useCommentListQuery = (reviewId: number) =>
  useQuery<Comment[]>({
    queryKey: ["commentList", reviewId],
    queryFn: () => fetchComments(reviewId),
    enabled: !!reviewId,
  });
