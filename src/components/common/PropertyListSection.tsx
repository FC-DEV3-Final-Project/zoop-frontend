import { useState } from "react";
import PropertyCard, { PropertyCardProps } from "@/components/common/PropertyCard";
import Tab from "@/components/common/Tab";
import { useRealEstatePropertiesQuery } from "@/queries/real-estate/useRealEstatePropertiesQuery";
import { useBookmarkedPropertiesQuery } from "@/queries/mypage/useBookmarkedPropertiesQuery";

interface TabOption {
  label: string;
  value: string;
}

interface PropertyListSectionProps {
  tabOptions: TabOption[];
  propertyMap?: { [tabValue: string]: PropertyCardProps[] };
  showMapViewButton?: boolean;
  isNumberVisible?: boolean;
  propertyCount?: { [tabValue: string]: number };
  // 부동산 페이지용 props
  realtyId?: number;
}

// 탭 값과 tradeType 매핑
const tabToTradeType = {
  rent: "월세",
  lease: "전세",
  deal: "매매",
};

// 부동산 탭인지 확인하는 함수
const isRealEstateTab = (selectedTab: string): boolean => {
  return selectedTab === "rent" || selectedTab === "lease" || selectedTab === "deal";
};

// 북마크 탭인지 확인하는 함수
const isBookmarkedTab = (selectedTab: string): boolean => {
  return selectedTab === "bookmarked";
};

const PropertyListSection = ({
  tabOptions,
  propertyMap,
  showMapViewButton = true,
  isNumberVisible = true,
  propertyCount,
  realtyId,
}: PropertyListSectionProps) => {
  const [selectedTab, setSelectedTab] = useState(tabOptions[0].value);

  // 부동산 쿼리
  const realEstateQuery = useRealEstatePropertiesQuery(
    realtyId!,
    tabToTradeType[selectedTab as keyof typeof tabToTradeType],
    20,
  );

  // 북마크 쿼리
  const bookmarkedQuery = useBookmarkedPropertiesQuery(20);

  const handleMapView = () => {
    alert("지도에서 보기 클릭!");
  };

  // 탭에 따른 데이터와 로더 선택
  const { currentProperties, currentLoader, isLoading, hasMoreItems, currentError } =
    (isRealEstateTab(selectedTab) || isBookmarkedTab(selectedTab)) &&
    (isRealEstateTab(selectedTab) ? realEstateQuery : bookmarkedQuery)
      ? {
          currentProperties:
            (isRealEstateTab(selectedTab) ? realEstateQuery : bookmarkedQuery)!.items || [],
          currentLoader: (isRealEstateTab(selectedTab) ? realEstateQuery : bookmarkedQuery)!.loader,
          isLoading: (isRealEstateTab(selectedTab) ? realEstateQuery : bookmarkedQuery)!.loading,
          hasMoreItems: (isRealEstateTab(selectedTab) ? realEstateQuery : bookmarkedQuery)!.hasMore,
          currentError: (isRealEstateTab(selectedTab) ? realEstateQuery : bookmarkedQuery)!.error,
        }
      : {
          currentProperties: propertyMap?.[selectedTab] || [],
        };

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
