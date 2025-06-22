import useInfiniteScroll from "@/hooks/common/useInfiniteScroll";
import { PropertyCardProps } from "@/components/common/PropertyCard";
import fetchRealEstateProperties from "@/apis/real-estate/fetchRealEstateProperties";

export const useRealEstatePropertiesQuery = (
  realtyId: number,
  tradeTypeName: string,
  size: number = 2,
  enabled: boolean = true,
) => {
  const { items, loader, hasMore, loading, error, reset } = useInfiniteScroll<PropertyCardProps>(
    async (page: number) => {
      return fetchRealEstateProperties(
        page,
        size,
        realtyId,
        tradeTypeName as "매매" | "월세" | "전세",
      );
    },
    [realtyId, tradeTypeName],
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
