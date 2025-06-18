import axiosInstance from "@/apis/utils/axiosInstance";

type CheckUserNicknameResponse = {
  isDuplicated: boolean;
};

const fetchCheckUserNickname = async (nickname: string): Promise<CheckUserNicknameResponse> => {
  try {
    // 실제 api 호출
    const response = await axiosInstance.get("/mypage/check-user-nickname", {
      params: { nickname },
    });
    return response.data;

    // mock api 호출
    // const response = await fetch(`/mypage/check-user-nickname?nickname=${nickname}`);
    // return response.json();
  } catch (error) {
    console.error("fetchCheckUserNickname 에러:", error);
    throw error;
  }
};

export default fetchCheckUserNickname;
