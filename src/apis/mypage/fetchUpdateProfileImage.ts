import axiosInstance from "@/apis/utils/axiosInstance";

const fetchUpdateProfileImage = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("profileImage", file);
  try {
  const response = await axiosInstance.post("/mypage/profile-image", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    });

    return response.data.profileImageUrl;
  } catch (error) {
    console.error("프로필 이미지 업로드 실패:", error);
    throw error;
  }
};

export default fetchUpdateProfileImage;
