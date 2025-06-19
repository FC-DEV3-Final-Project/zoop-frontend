import { useMutation } from "@tanstack/react-query";
import fetchUpdateNickname from "@/apis/mypage/fetchUpdateNickname";

export const useUpdateNicknameMutation = (options?: {
  onSuccess?: (data: boolean) => void;
  onError?: (error: unknown) => void;
}) =>
  useMutation({
    mutationFn: fetchUpdateNickname,
    ...options,
  });
