import { useQuery } from "@tanstack/react-query";
import { fetchComments } from "@/apis/property/review/fetchComments";
import type { CommentType } from "@/types/commentType";

export const useCommentListQuery = (reviewId: number) =>
  useQuery<CommentType[]>({
    queryKey: ["commentList", reviewId],
    queryFn: () => fetchComments(reviewId),
    enabled: !!reviewId,
  });
