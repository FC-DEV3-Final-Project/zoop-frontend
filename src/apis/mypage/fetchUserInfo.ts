import axiosInstance from "../utils/axiosInstance";

type UserProfile = {
  email: string;
  nickname: string;
  profileImageUrl: string;
};

const fetchUserInfo = async (): Promise<UserProfile> => {
  const response = await axiosInstance.get("/mypage/account");
  return response.data.data;
};

export default fetchUserInfo;
export type { UserProfile };
