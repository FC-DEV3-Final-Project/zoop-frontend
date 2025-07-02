import { UserNickname } from "@/types/user";
import axiosInstance from "../utils/axiosInstance";
import { useMutation } from "@tanstack/react-query";
import { getUserInfo } from "./getUserInfo";
import { useRouter } from "next/navigation";
import { useUserInfoStore } from "@/stores/useUserInfoStore";

export const createUserNickname = async (nickname: string): Promise<UserNickname> => {
  const response = await axiosInstance.post("/users/auth/register", { nickname });
  return response.data;
};

export const useCreateNicknameMutation = () => {
  const router = useRouter();
  const { setUser } = useUserInfoStore();

  return useMutation({
    mutationFn: createUserNickname,
    onSuccess: async () => {
      const userData = await getUserInfo();
      setUser(userData);
      router.push("/");
    },
    onError: (error) => {
      console.error("닉네임 등록 오류:", error);
    },
  });
};
