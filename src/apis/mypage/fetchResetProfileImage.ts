import axiosInstance from "@/apis/utils/axiosInstance";

const fetchResetProfileImage = async (): Promise<string> => {
  const formData = new FormData();
  
  try {
    const response = await axiosInstance.patch("/mypage/profile-image/reset", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

    // 성공 시 profileImageUrl 반환
    return response.data.profileImageUrl;
  } catch (error) {
    console.error("프로필 이미지 초기화 실패:", error);
    throw error;
  }
};

export default fetchResetProfileImage;
