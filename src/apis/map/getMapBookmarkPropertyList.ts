import axiosInstance from "../utils/axiosInstance";
import { PropertyCardProps } from "@/components/common/PropertyCard";

export const getMapBookmarkPropertyList = async (): Promise<PropertyCardProps> => {
  try {
    const response = await axiosInstance.get("/mypage/histories/bookmarked-properties/map");
    console.log("넘어오는 데이터 확인 ::::: ", response.data);
    return response.data;
  } catch (error) {
    console.error("getMapBookmarkPropertyList 에러:", error);
    throw error;
  }
};
