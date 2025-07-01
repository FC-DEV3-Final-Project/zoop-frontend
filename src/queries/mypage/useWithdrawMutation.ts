import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";

const fetchWithdraw = async (reason: string): Promise<boolean> => {
  const response = await axiosInstance.delete("/mypage/withdraw", {
    data: { withdrawReason: reason },
  });
  return response.status === 200;
};

export const useWithdrawMutation = (options?: {
  onSuccess?: (data: boolean) => void;
  onError?: (error: unknown) => void;
}) =>
  useMutation({
    mutationFn: () => fetchWithdraw(""),
    ...options,
  });
