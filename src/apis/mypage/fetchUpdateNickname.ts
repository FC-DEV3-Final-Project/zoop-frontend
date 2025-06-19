import axiosInstance from "@/apis/utils/axiosInstance";

const fetchUpdateNickname = async (nickname: string): Promise<boolean> => {
  try {
    const response = await axiosInstance.patch("/mypage/user-nickname", { nickname });
    return response.status === 200;
  } catch (error) {
    console.error("닉네임 수정 에러:", error);
    throw error;
  }
};

export default fetchUpdateNickname;
