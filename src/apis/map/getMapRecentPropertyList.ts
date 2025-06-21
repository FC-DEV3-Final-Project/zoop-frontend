import axiosInstance from "../utils/axiosInstance";
import { PropertyCardProps } from "@/components/common/PropertyCard";

export const getMapRecentPropertyList = async (): Promise<PropertyCardProps> => {
  try {
    const response = await axiosInstance.get("/mypage/histories/recent-properties");
    console.log("넘어오는 데이터 확인 ::::: ", response.data);
    return response.data;
  } catch (error) {
    console.error("getMapRecentPropertyList 에러:", error);
    throw error;
  }
};
