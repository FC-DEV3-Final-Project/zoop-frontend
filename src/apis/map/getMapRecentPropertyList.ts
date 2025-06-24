import { MapPropertyItem } from "@/types/map";
import axiosInstance from "../utils/axiosInstance";

export const getMapRecentPropertyList = async (): Promise<MapPropertyItem[]> => {
  try {
    const response = await axiosInstance.get("/mypage/histories/recent-properties/map");
    console.log("넘어오는 데이터 확인 ::::: ", response.data);
    return response.data;
  } catch (error) {
    console.error("getMapRecentPropertyList 에러:", error);
    throw error;
  }
};
