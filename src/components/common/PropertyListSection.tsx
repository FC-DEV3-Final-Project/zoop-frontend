import { useState } from "react";
import PropertyCard, { PropertyCardProps } from "@/components/common/PropertyCard";
import Tab from "@/components/common/Tab";
import { useRealEstatePropertiesQuery } from "@/queries/real-estate/useRealEstatePropertiesQuery";

interface TabOption {
  label: string;
  value: string;
}

interface PropertyListSectionProps {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
  tabOptions: TabOption[];
  propertyMap?: { [tabValue: string]: PropertyCardProps[] };
  showMapViewButton?: boolean;
  isNumberVisible?: boolean;
  propertyCount?: { [tabValue: string]: number };
  loaders?: { [tabValue: string]: React.RefObject<HTMLDivElement | null> };
  loading?: { [tabValue: string]: boolean };
  hasMore?: { [tabValue: string]: boolean };
  errors?: { [tabValue: string]: string | null };
  // 부동산 페이지용 props
  realtyId?: number;
  isRealEstatePage?: boolean;
}

// 탭 값과 tradeType 매핑
const tabToTradeType = {
  rent: "월세",
  lease: "전세",
  deal: "매매",
};

const PropertyListSection = ({
  selectedTab,
  setSelectedTab,
  tabOptions,
  propertyMap,
  showMapViewButton = true,
  isNumberVisible = true,
  propertyCount,
  loaders,
  loading,
  hasMore,
  errors,
  realtyId,
  isRealEstatePage = false,
}: PropertyListSectionProps) => {
  // 부동산 페이지인 경우 쿼리 사용
  const {
    items: propertiesData,
    loader: propertiesLoader,
    hasMore: propertiesHasMore,
    loading: isPropertiesLoading,
  } = useRealEstatePropertiesQuery(
    realtyId!,
    tabToTradeType[selectedTab as keyof typeof tabToTradeType],
    20,
  );

  const handleMapView = () => {
    alert("지도에서 보기 클릭!");
  };

  // 부동산 페이지인 경우 쿼리 데이터 사용, 아니면 props 데이터 사용
  const currentProperties = isRealEstatePage
    ? propertiesData?.map((property) => ({
        ...property,
      })) || []
    : propertyMap?.[selectedTab] || [];

  const currentLoader = isRealEstatePage ? propertiesLoader : loaders?.[selectedTab];
  const isLoading = isRealEstatePage ? isPropertiesLoading : loading?.[selectedTab];
  const hasMoreItems = isRealEstatePage ? propertiesHasMore : hasMore?.[selectedTab];
  const currentError = errors?.[selectedTab];

  return (
    <section className="flex flex-col">
      {/* 탭바 + 매물 헤더를 sticky로 묶기 */}
      <div className="sticky top-16 z-10 bg-white">
        <Tab tabOptions={tabOptions} selected={selectedTab} onChange={setSelectedTab} />
        <div className="flex items-center justify-between rounded bg-white px-5 py-4">
          <div className="justify-center">
            <span className="text-subtitle4">{propertyCount?.[selectedTab]}개</span>
            <span className="text-caption2">의 매물</span>
          </div>
          {showMapViewButton && (
            <button onClick={handleMapView} className="flex items-center justify-start gap-1">
              <img src="/icons/map.svg" alt="더보기" className="h-4 w-4" />
              <span className="text-body2">지도에서 보기</span>
            </button>
          )}
        </div>
      </div>
      {/* 매물 리스트만 스크롤 */}
      <div className="overflow-y-auto">
        {currentProperties.map((property) => (
          <PropertyCard key={property.propertyId} {...property} isNumberVisible={isNumberVisible} />
        ))}
        {hasMoreItems && (
          <div ref={currentLoader} className="h-16 w-full">
            {isLoading && (
              <div className="flex items-center justify-center py-4">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-800-primary border-t-transparent"></div>
              </div>
            )}
          </div>
        )}
        {currentError && <div className="p-4 text-red-500">{currentError}</div>}
      </div>
    </section>
  );
};

export default PropertyListSection;
