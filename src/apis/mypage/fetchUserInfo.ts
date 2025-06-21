import axiosInstance from "../utils/axiosInstance";

type UserProfile = {
  email: string;
  nickname: string;
  profileImageUrl: string;
};

const fetchUserInfo = async (): Promise<UserProfile> => {
  try {
    const response = await axiosInstance.get("/mypage/account");
    return response.data.data;
  } catch (error) {
    console.error("fetchUserInfo 에러:", error);
    throw error;
  }
};

export default fetchUserInfo;
export type { UserProfile };