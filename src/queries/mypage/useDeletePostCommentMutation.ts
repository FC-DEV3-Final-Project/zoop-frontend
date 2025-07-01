import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";

const deletePostComment = async (commentId: number) => {
  const res = await axiosInstance.delete(`/mypage/comments/${commentId}`);
  return res.data.result;
};

export const useDeletePostCommentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (commentId: number) => deletePostComment(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["postComment"] });
    },
  });
};
