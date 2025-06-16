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
}

const PropertyListSection = ({
  tabOptions,
  propertyMap,
  showMapViewButton = true,
  isNumberVisible = true,
}: PropertyListSectionProps) => {
  const [selectedTab, setSelectedTab] = useState(tabOptions[0].value);

  const handleMapView = () => {
    alert("지도에서 보기 클릭!");
  };

  const currentProperties = propertyMap[selectedTab] || [];

  return (
    <section className="flex flex-col">
      {/* 탭바 + 매물 헤더를 sticky로 묶기 */}
      <div className="sticky top-16 z-10 bg-white">
        <Tab tabOptions={tabOptions} selected={selectedTab} onChange={setSelectedTab} />
        <div className="flex items-center justify-between rounded bg-white px-5 py-4">
          <div className="justify-center">
            <span className="text-subtitle4">{currentProperties.length}건</span>
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
        {currentProperties.map((property, index) => (
          <PropertyCard key={property.propertyId} {...property} isNumberVisible={isNumberVisible} />
        ))}
      </div>
    </section>
  );
};

export default PropertyListSection;
