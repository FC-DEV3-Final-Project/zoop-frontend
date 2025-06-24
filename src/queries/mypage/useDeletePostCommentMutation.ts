import { useMutation, useQueryClient } from "@tanstack/react-query";
import deletePostComment from "@/apis/mypage/deletePostComment";

export const useDeletePostCommentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (commentId: number) => deletePostComment(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["postComment"] });
    },
  });
};
