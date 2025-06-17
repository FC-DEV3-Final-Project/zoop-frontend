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
    const response = await axiosInstance.get(`/mypage/histories/bookmarked-properties?page=${page}`);
    return response.data;
  } catch (error) {
    console.error("fetchBookmarkedProperties 에러:", error);
    throw error;
  }
};

export default fetchBookmarkedProperties;