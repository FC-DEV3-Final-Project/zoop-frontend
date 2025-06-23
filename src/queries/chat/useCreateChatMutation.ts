import { useMutation } from "@tanstack/react-query";
import { postChat } from "@/apis/chat/postChat";

export const useCreateChatMutation = () =>
  useMutation({
    mutationFn: postChat,
  });
