import { PropertyCardProps } from "@/components/common/PropertyCard";
import axiosInstance from "../utils/axiosInstance";

type BookmarkedPropertiesResponse = {
  content: PropertyCardProps[];
  hasNext: boolean;
};

const fetchBookmarkedProperties = async (
  page: number,
): Promise<BookmarkedPropertiesResponse> => {
  try {
    // 실제 api 호출
    // const response = await axiosInstance.get(`/mypage/histories/bookmarked-properties?page=${page}`);
    // return response.data;

    // mock api 호출
    const response = await fetch(`/mypage/histories/bookmarked-properties?page=${page}`);
    return response.json();
  } catch (error) {
    console.error("fetchBookmarkedProperties 에러:", error);
    throw error;
  }
};

export default fetchBookmarkedProperties;