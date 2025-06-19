import useInfiniteScroll from "@/hooks/common/useInfiniteScroll";
import { PropertyCardProps } from "@/components/common/PropertyCard";
import fetchRealEstateProperties from "@/apis/real-estate/fetchRealEstateProperties";

export const useRealEstatePropertiesQuery = (
  realtyId: number,
  tradeType: string,
  size: number = 2,
) => {
  const {
    items,
    loader,
    hasMore,
    loading,
  } = useInfiniteScroll<PropertyCardProps>(
    async (page: number) => {
      return fetchRealEstateProperties(page, size, realtyId, tradeType as "매매" | "월세" | "전세");
    },
    [realtyId, tradeType],
  );

  // 최종 리스트 (초기 데이터 + 추가 데이터)
  return {
    items,
    loader,
    hasMore,
    loading,
  };
};
