import { PropertyCardProps } from "@/components/common/PropertyCard";
import axiosInstance from "../utils/axiosInstance";

type BookmarkedPropertiesResponse = {
  content: PropertyCardProps[];
  hasNext: boolean;
};

const fetchBookmarkedProperties = async (
  page: number,
  size: number = 2,
): Promise<BookmarkedPropertiesResponse> => {
  try {
    // 무한스크롤 테스트용 2초 대기
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await axiosInstance.get(`/mypage/histories/bookmarked-properties?page=${page}&size=${size}`);
    return response.data;
  } catch (error) {
    console.error("fetchBookmarkedProperties 에러:", error);
    throw error;
  }
};

export default fetchBookmarkedProperties;
