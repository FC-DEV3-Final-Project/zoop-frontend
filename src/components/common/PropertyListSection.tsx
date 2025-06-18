import { useState } from "react";
import PropertyCard, { PropertyCardProps } from "@/components/common/PropertyCard";
import Tab from "@/components/common/Tab";

interface TabOption {
  label: string;
  value: string;
}

interface PropertyListSectionProps {
  tabOptions: TabOption[];
  propertyMap: { [tabValue: string]: PropertyCardProps[] };
  showMapViewButton?: boolean;
  isNumberVisible?: boolean;
  propertyCount?: { [tabValue: string]: number };
  loaders?: { [tabValue: string]: React.RefObject<HTMLDivElement | null> };
  loading?: { [tabValue: string]: boolean };
  hasMore?: { [tabValue: string]: boolean };
  errors?: { [tabValue: string]: string | null };
}

const PropertyListSection = ({
  tabOptions,
  propertyMap,
  showMapViewButton = true,
  isNumberVisible = true,
  propertyCount,
  loaders,
  loading,
  hasMore,
  errors,
}: PropertyListSectionProps) => {
  const [selectedTab, setSelectedTab] = useState(tabOptions[0].value);

  const handleMapView = () => {
    alert("지도에서 보기 클릭!");
  };

  const currentProperties = propertyMap[selectedTab] || [];
  const currentLoader = loaders?.[selectedTab];
  const isLoading = loading?.[selectedTab];
  const hasMoreItems = hasMore?.[selectedTab];
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
            {/* {isLoading && <div className="text-center">로딩 중...</div>} */}
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
