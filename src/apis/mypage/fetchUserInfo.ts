import axiosInstance from "../utils/axiosInstance";

type UserProfile = {
  email: string;
  nickname: string;
  profileImageUrl: string;
};

const fetchUserInfo = async (): Promise<UserProfile> => {
  try {
    // 실제 api 호출
    const response = await axiosInstance.get("/mypage/account");
    return response.data;

    // mock api 호출
    // const response = await fetch("/mypage/account");
    // return response.json().then((data) => data.account);
  } catch (error) {
    console.error("fetchUserInfo 에러:", error);
    throw error;
  }
};

export default fetchUserInfo;
export type { UserProfile };