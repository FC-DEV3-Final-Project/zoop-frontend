import axiosInstance from "@/apis/utils/axiosInstance";
import { BookmarkProps } from "@/types/propertyDetail";

export const patchBookmark = async (propertyId: number): Promise<BookmarkProps> => {
  const res = await axiosInstance.patch(`/properties/${propertyId}/likes`);
  return res.data.data;
};
