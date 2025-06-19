import { useQuery } from "@tanstack/react-query";
import fetchUserInfo, { UserProfile } from "@/apis/mypage/fetchUserInfo";

export const useUserInfoQuery = () =>
  useQuery<UserProfile>({
    queryKey: ["userInfo"],
    queryFn: fetchUserInfo,
  });
