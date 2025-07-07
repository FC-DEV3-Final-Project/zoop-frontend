import { UserNickname } from "@/types/user";
import axiosInstance from "../utils/axiosInstance";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { fetchUserInfoData } from "./fetchUserInfoData";

export const createUserNickname = async (nickname: string): Promise<UserNickname> => {
  const response = await axiosInstance.post("/users/auth/register", { nickname });
  return response.data;
};

export const useCreateNicknameMutation = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: createUserNickname,
    onSuccess: async () => {
      await fetchUserInfoData();
      router.push("/");
    },
    onError: (error) => {
      console.error("닉네임 등록 오류:", error);
    },
  });
};
