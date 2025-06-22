import useInfiniteScroll from "@/hooks/common/useInfiniteScroll";
import fetchBookmarkedProperties from "@/apis/mypage/fetchBookmarkedProperties";
import { PropertyCardProps } from "@/components/common/PropertyCard";

export const useBookmarkedPropertiesQuery = (size: number = 2, enabled: boolean = true) => {
  const { items, loader, hasMore, loading, error, reset } = useInfiniteScroll<PropertyCardProps>(
    async (page: number) => {
      return fetchBookmarkedProperties(page, size);
    },
    [],
    enabled,
  );

  return {
    items,
    loader,
    hasMore,
    loading,
    error,
    reset,
  };
};
