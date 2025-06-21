import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postComment } from "@/apis/property/review/postComment";

export const usePostCommentMutation = (reviewId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (content: string) => postComment(reviewId, content),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["commentList", reviewId] });
    },
  });
};
