import useInfiniteScroll from "@/hooks/common/useInfiniteScroll";
import fetchBookmarkedProperties from "@/apis/mypage/fetchBookmarkedProperties";
import { PropertyCardProps } from "@/components/common/PropertyCard";

export const useBookmarkedPropertiesQuery = (
  size: number = 2,
) => {
  const {
    items,
    loader,
    hasMore,
    loading,
    error,
  } = useInfiniteScroll<PropertyCardProps>(
    async (page: number) => {
      return fetchBookmarkedProperties(page, size);
    },
    [],
  );

  return {
    items,
    loader,
    hasMore,
    loading,
    error,
  };
};
