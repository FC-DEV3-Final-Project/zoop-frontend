import { useMutation } from "@tanstack/react-query";
import fetchUpdateProfileImage from "@/apis/mypage/fetchUpdateProfileImage";

export const useUpdateProfileImageMutation = (options?: {
  onSuccess?: (data: string) => void;
  onError?: (error: unknown) => void;
}) =>
  useMutation({
    mutationFn: fetchUpdateProfileImage,
    ...options,
  });
