import { PropertyCardProps } from "@/components/common/PropertyCard";

export type BookmarkedPropertiesResponse = {
  content: PropertyCardProps[];
  hasNext: boolean;
};

export const fetchBookmarkedProperties = async (
  page: number,
): Promise<BookmarkedPropertiesResponse> => {
  const response = await fetch(`/mypage/bookmarked-properties?page=${page}`);
  if (!response.ok) {
    throw new Error("찜한 매물 목록을 가져오는데 실패했습니다");
  }
  return response.json();
};
