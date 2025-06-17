import { PropertyCardProps } from "@/components/common/PropertyCard";

type BookmarkedPropertiesResponse = {
  content: PropertyCardProps[];
  hasNext: boolean;
};

const fetchBookmarkedProperties = async (
  page: number,
): Promise<BookmarkedPropertiesResponse> => {
  const response = await fetch(`/mypage/histories/bookmarked-properties?page=${page}`);
  if (!response.ok) {
    throw new Error("찜한 매물 목록을 가져오는데 실패했습니다");
  }
  return response.json();
};

export default fetchBookmarkedProperties;