import axiosInstance from "@/apis/utils/axiosInstance";

type CheckUserNicknameResponse = {
  isDuplicated: boolean;
};

const fetchCheckUserNickname = async (nickname: string): Promise<CheckUserNicknameResponse> => {
  try {
    const response = await axiosInstance.get("/mypage/check-user-nickname", {
      params: { nickname },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("fetchCheckUserNickname 에러:", error);
    throw error;
  }
};

export default fetchCheckUserNickname;
