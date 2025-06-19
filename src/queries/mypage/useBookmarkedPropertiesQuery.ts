// useInfiniteBookmarkedPropertiesQuery.ts
import useInfiniteScroll from "@/hooks/common/useInfiniteScroll";
import fetchBookmarkedProperties from "@/apis/mypage/fetchBookmarkedProperties";
import { PropertyCardProps } from "@/components/common/PropertyCard";

export const useBookmarkedPropertiesQuery = (
  homeData: any,
  // enabled: boolean = true,
  size: number = 2,
) => {
  const {
    items: additionalItems,
    loader,
    hasMore,
    loading: bookmarkedLoading,
  } = useInfiniteScroll<PropertyCardProps>(
    async (page: number) => {
      if (
        !homeData?.activity?.bookmarkedPropertyCount ||
        homeData.activity.bookmarkedPropertyCount < size
      ) {
        return { content: [], hasNext: false };
      }
      return fetchBookmarkedProperties(page, size);
    },
    [homeData?.bookmarkedProperties],
  );

  // 최종 리스트 (초기 데이터 + 추가 데이터)
  const bookmarkedItems = [...(homeData?.bookmarkedProperties || []), ...additionalItems];
  return {
    bookmarkedItems,
    loader,
    hasMore,
    bookmarkedLoading,
  };
};
