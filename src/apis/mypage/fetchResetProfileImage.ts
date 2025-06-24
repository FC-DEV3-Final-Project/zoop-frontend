import axiosInstance from "@/apis/utils/axiosInstance";

const fetchResetProfileImage = async (): Promise<string> => {
  const formData = new FormData();
  
    const response = await axiosInstance.patch("/mypage/profile-image/reset", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
    // 성공 시 profileImageUrl 반환
    return response.data.profileImageUrl;
};

export default fetchResetProfileImage;
