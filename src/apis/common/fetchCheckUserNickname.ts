import axiosInstance from "@/apis/utils/axiosInstance";

type CheckUserNicknameResponse = {
  isDuplicated: boolean;
};

const fetchCheckUserNickname = async (nickname: string): Promise<CheckUserNicknameResponse> => {
const response = await axiosInstance.get("/mypage/check-user-nickname", {
      params: { nickname },
    });
    return response.data.data; 
};

export default fetchCheckUserNickname;
