import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/apis/utils/axiosInstance";

type UserProfile = {
  email: string;
  nickname: string;
  profileImageUrl: string;
};

const fetchUserInfo = async (): Promise<UserProfile> => {
  const response = await axiosInstance.get("/mypage/account");
  return response.data.data;
};
export const useUserInfoQuery = () =>
  useQuery<UserProfile>({
    queryKey: ["userInfo"],
    queryFn: fetchUserInfo,
  });
