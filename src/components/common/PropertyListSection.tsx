import { useState } from "react";
import PropertyCard, { PropertyCardProps } from "@/components/common/PropertyCard";
import Tab from "@/components/common/Tab";
import EmptyListMessage from "@/components/common/EmptyListMessage";
import { useRealEstatePropertiesQuery } from "@/queries/real-estate/useRealEstatePropertiesQuery";
import { useBookmarkedPropertiesQuery } from "@/queries/mypage/useBookmarkedPropertiesQuery";
import MapListDialog from "../mapPropertyListDialog/MapListDialog";
import { MapPropertyItem } from "@/types/map";

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

type CurrentQueryType = {
  items: PropertyCardProps[];
  loader: React.RefObject<HTMLDivElement | null>;
  hasMore: boolean;
  loading: boolean;
  error: string | null;
  reset: () => void;
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
  const [mapOpen, setMapOpen] = useState(false);

  // 부동산 쿼리들 - enabled 옵션으로 조건부 호출
  const rentQuery = useRealEstatePropertiesQuery(realtyId!, "월세", 20, selectedTab === "rent");
  const leaseQuery = useRealEstatePropertiesQuery(realtyId!, "전세", 20, selectedTab === "lease");
  const dealQuery = useRealEstatePropertiesQuery(realtyId!, "매매", 20, selectedTab === "deal");

  // 북마크 쿼리 - enabled 옵션으로 조건부 호출
  const bookmarkedQuery = useBookmarkedPropertiesQuery(20, selectedTab === "bookmarked");

  // 현재 선택된 탭의 쿼리 가져오기
  const getCurrentQuery = (): CurrentQueryType | null => {
    if (selectedTab === "rent") return rentQuery;
    if (selectedTab === "lease") return leaseQuery;
    if (selectedTab === "deal") return dealQuery;
    if (selectedTab === "bookmarked") return bookmarkedQuery;
    return null;
  };

  const currentQuery = getCurrentQuery();

  // 탭에 따른 데이터와 로더 선택
  const { currentProperties, currentLoader, isLoading, hasMoreItems, currentError } = currentQuery
    ? {
        currentProperties: currentQuery.items || [],
        currentLoader: currentQuery.loader,
        isLoading: currentQuery.loading,
        hasMoreItems: currentQuery.hasMore,
        currentError: currentQuery.error,
      }
    : {
        currentProperties: propertyMap?.[selectedTab] || [],
      };

  // 탭별 빈 상태 메시지
  const emptyMessage =
    selectedTab === "bookmarked"
      ? "찜한 매물이 없습니다."
      : selectedTab === "recentViewed"
        ? "최근 본 매물이 없습니다."
        : "등록된 매물이 없습니다.";

  return (
    <section className="flex flex-1 flex-col">
      {/* 탭바 + 매물 헤더를 sticky로 묶기 */}
      <div className="sticky top-12 z-10 bg-white">
        <Tab tabOptions={tabOptions} selected={selectedTab} onChange={setSelectedTab} />
        <div className="flex items-center justify-between rounded bg-white px-5 py-4">
          <div className="justify-center">
            <span className="text-subtitle4">{propertyCount?.[selectedTab]}개</span>
            <span className="text-caption2">의 매물</span>
          </div>
          {showMapViewButton && (
            <button
              onClick={() => setMapOpen(true)}
              disabled={propertyCount?.[selectedTab] === 0}
              className={`flex items-center justify-start gap-1 ${
                propertyCount?.[selectedTab] === 0
                  ? "text-gray-700-info"
                  : "cursor-pointer text-black"
              }`}
            >
              <img
                src={
                  propertyCount?.[selectedTab] === 0 ? "/icons/map-disabled.svg" : "/icons/map.svg"
                }
                alt="더보기"
                className="h-4 w-4"
              />
              <span className="text-body2">지도에서 보기</span>
            </button>
          )}
          {mapOpen && (
            <MapListDialog
              open={mapOpen}
              onOpenChange={setMapOpen}
              properties={currentProperties as MapPropertyItem[]}
              type={selectedTab === "bookmarked" ? "bookmark" : "recentView"}
              title={selectedTab === "bookmarked" ? "내가 찜한 매물" : "최근 본 매물"}
            />
          )}
        </div>
      </div>
      {/* 매물 리스트만 스크롤 */}
      <div className="flex-1 overflow-y-auto">
        {propertyCount?.[selectedTab] === 0 ? (
          <div className="flex h-full items-center justify-center">
            <EmptyListMessage message={emptyMessage} />
          </div>
        ) : (
          <>
            {currentProperties.map((property) => (
              <PropertyCard
                key={property.propertyId}
                {...property}
                isNumberVisible={isNumberVisible}
              />
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
          </>
        )}
        {currentError && <div className="p-4 text-red-500">{currentError}</div>}
      </div>
    </section>
  );
};

export default PropertyListSection;
