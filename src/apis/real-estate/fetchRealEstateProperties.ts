import { PropertyCardProps } from "@/components/common/PropertyCard";
import axiosInstance from "../utils/axiosInstance";

type RealEstatePropertiesResponse = {
  content: PropertyCardProps[];
  hasNext: boolean;
};

const fetchRealEstateProperties = async (
  page: number,
  size: number = 2,
  realtyId: number,
  tradeTypeName: "월세" | "전세" | "매매",
): Promise<RealEstatePropertiesResponse> => {
  try {
    // 무한스크롤 테스트용 2초 대기
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await axiosInstance.get(
      `/realties/${realtyId}/properties?page=${page}&size=${size}&tradeTypeName=${tradeTypeName}`,
    );
    return response.data;
  } catch (error) {
    console.error("fetchBookmarkedProperties 에러:", error);
    throw error;
  }
};

export default fetchRealEstateProperties;
