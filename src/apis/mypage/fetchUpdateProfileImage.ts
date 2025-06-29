import axiosInstance from "@/apis/utils/axiosInstance";

const fetchUpdateProfileImage = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("profileImageUrl", file);
  const response = await axiosInstance.post("/mypage/profile-image", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data.data.profileImageUrl;
};

export default fetchUpdateProfileImage;
