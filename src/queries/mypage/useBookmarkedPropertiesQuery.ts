import useInfiniteScroll from "@/hooks/common/useInfiniteScroll";
import { PropertyCardProps } from "@/components/common/PropertyCard";
import axiosInstance from "@/apis/utils/axiosInstance";

type BookmarkedPropertiesResponse = {
  myProperties: PropertyCardProps[];
  hasNext: boolean;
};

const fetchBookmarkedProperties = async (
  page: number,
  size: number = 2,
  hasNext: boolean = true,
): Promise<BookmarkedPropertiesResponse> => {
    // 무한스크롤 테스트용 2초 대기
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await axiosInstance.get(`/mypage/histories/bookmarked-properties?page=${page}&size=${size}`);
    return response.data.data;
};


export const useBookmarkedPropertiesQuery = (size: number = 2, enabled: boolean = true) => {
  const { items, loader, hasMore, loading, error, reset } = useInfiniteScroll<PropertyCardProps>(
    async (page: number) => {
      const { myProperties, hasNext } = await fetchBookmarkedProperties(page, size);
      return { content: myProperties, hasNext };
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
