import { useMutation } from "@tanstack/react-query";
import fetchResetProfileImage from "@/apis/mypage/fetchResetProfileImage";

export const useResetProfileImageMutation = (options?: {
  onSuccess?: (data: string) => void;
  onError?: (error: unknown) => void;
}) =>
  useMutation({
    mutationFn: fetchResetProfileImage,
    ...options,
  });
