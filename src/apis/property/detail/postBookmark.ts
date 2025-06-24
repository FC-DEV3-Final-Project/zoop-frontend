import axiosInstance from "@/apis/utils/axiosInstance";
import { BookmarkProps } from "@/types/propertyDetail";

export const postBookmark = async (propertyId: number): Promise<BookmarkProps> => {
  const res = await axiosInstance.post(`/properties/${propertyId}/likes`);
  return res.data.data;
};
