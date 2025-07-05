import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";

const fetchUpdateNickname = async (nickname: string): Promise<boolean> => {
  const response = await axiosInstance.patch("/mypage/user-nickname", { nickname });
  return response.status === 200;
};

export const useUpdateNicknameMutation = (options?: {
  onSuccess?: (data: boolean) => void;
  onError?: (error: unknown) => void;
}) =>
  useMutation({
    mutationFn: fetchUpdateNickname,
    ...options,
  });
