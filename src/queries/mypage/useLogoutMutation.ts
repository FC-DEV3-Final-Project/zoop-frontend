import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";

const fetchLogout = async (): Promise<boolean> => {
  const response = await axiosInstance.post("/users/auth/logout", undefined);
  return response.status === 204;
};
export const useLogoutMutation = (options?: {
  onSuccess?: (data: boolean) => void;
  onError?: (error: unknown) => void;
}) =>
  useMutation({
    mutationFn: fetchLogout,
    onSuccess: (data) => {
      options?.onSuccess?.(data);
    },
    onError: (error) => {
      options?.onError?.(error);
    },
  });
