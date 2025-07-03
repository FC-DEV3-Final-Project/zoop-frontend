import useInfiniteScroll from "@/hooks/common/useInfiniteScroll";
import { PropertyCardProps } from "@/components/common/PropertyCard";
import axiosInstance from "@/apis/utils/axiosInstance";

type RealEstatePropertiesResponse = {
  properties: PropertyCardProps[];
  hasNext: boolean;
};

const fetchRealEstateProperties = async (
  page: number,
  size: number = 2,
  realtyId: number,
  tradeTypeName: "월세" | "전세" | "매매",
): Promise<RealEstatePropertiesResponse> => {
  const response = await axiosInstance.get(
    `/realties/${realtyId}/properties?page=${page}&size=${size}&tradeTypeName=${tradeTypeName}`,
  );
  return response.data.data;
};

export const useRealEstatePropertiesQuery = (
  realtyId: number,
  tradeTypeName: string,
  size: number = 2,
  enabled: boolean = true,
) => {
  const { items, loader, hasMore, loading, error, reset } = useInfiniteScroll<PropertyCardProps>(
    async (page: number) => {
      const { properties, hasNext } = await fetchRealEstateProperties(
        page,
        size,
        realtyId,
        tradeTypeName as "매매" | "월세" | "전세",
      );
      return {
        content: Array.isArray(properties) ? properties : [],
        hasNext: hasNext || false,
      };
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
