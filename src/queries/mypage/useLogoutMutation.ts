import { useMutation } from "@tanstack/react-query";
import fetchLogout from "@/apis/mypage/fetchLogout";

export const useLogoutMutation = (options?: {
  onSuccess?: (data: boolean) => void;
  onError?: (error: unknown) => void;
}) =>
  useMutation({
    mutationFn: fetchLogout,
    ...options,
  });
