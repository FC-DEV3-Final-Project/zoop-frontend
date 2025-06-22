import axiosInstance from "@/apis/utils/axiosInstance";
import type { BookmarkResponse } from "./postBookmark"; // 타입 재사용

export const patchBookmark = async (propertyId: number): Promise<BookmarkResponse> => {
  const res = await axiosInstance.patch(`/properties/${propertyId}/likes`);
  return res.data.data;
};
