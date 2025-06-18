import { useMutation } from "@tanstack/react-query";
import fetchWithdraw from "@/apis/mypage/fetchWithdraw";

export const useWithdrawMutation = (options?: {
  onSuccess?: (data: boolean) => void;
  onError?: (error: unknown) => void;
}) =>
  useMutation({
    mutationFn: () => fetchWithdraw(""),
    ...options,
  });
