import { MapPropertyItem } from "@/types/map";
import axiosInstance from "../utils/axiosInstance";

export const getMapBookmarkPropertyList = async (): Promise<MapPropertyItem> => {
  try {
    const response = await axiosInstance.get("/mypage/histories/bookmarked-properties/map");
    return response.data;
  } catch (error) {
    console.error("getMapBookmarkPropertyList 에러:", error);
    throw error;
  }
};
