import axiosInstance from "@/apis/utils/axiosInstance";

export interface BookmarkResponse {
  propertyId: number;
  isBookmarked: boolean;
}

export const postBookmark = async (propertyId: number): Promise<BookmarkResponse> => {
  const res = await axiosInstance.post(`/properties/${propertyId}/likes`);
  return res.data.data;
};
