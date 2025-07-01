import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";

const fetchUpdateProfileImage = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("profileImageUrl", file);
  const response = await axiosInstance.post("/mypage/profile-image", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data.data.profileImageUrl;
};

export const useUpdateProfileImageMutation = (options?: {
  onSuccess?: (data: string) => void;
  onError?: (error: unknown) => void;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchUpdateProfileImage,
    onSuccess: (data) => {
      // userInfo 쿼리 무효화
      queryClient.invalidateQueries({ queryKey: ["userInfo"] });

      // 로컬스토리지 업데이트
      const stored = localStorage.getItem("userInfo-storage");
      if (stored) {
        const parsed = JSON.parse(stored);
        parsed.state.user.profileImage = data;
        localStorage.setItem("userInfo-storage", JSON.stringify(parsed));
      }

      options?.onSuccess?.(data);
    },
    onError: (error) => {
      options?.onError?.(error);
    },
  });
};
