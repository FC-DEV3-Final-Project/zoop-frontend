"use client";

import { Header } from "@/layout/Header";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import { cn } from "@/lib/utils";
// import ToggleCompare from "./ToggleCompare";
import SortFilter from "./SortFilter";
import PropertyListComponent from "./PropertyList";
import DownloadExcel from "./excel/DownloadExcel";
import MapViewer from "./MapViewer";
import { useResizableScrollHeight } from "@/hooks/property/useResizableScrollHeight";
import { MapPropertyItem } from "@/types/map";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  properties: MapPropertyItem[];
  title: string;
  type?: "bookmark" | "recentView";
  positionList?: MarkerItem[];
}

type MarkerItem = {
  propertyId: string;
  latitude: number;
  longitude: number;
};

const MapListDialog = ({ open, onOpenChange, properties, title, type, positionList }: Props) => {
  const [originalList] = useState<MapPropertyItem[]>(properties); // prop으로 넘어온 데이터
  const [propertyList, setPropertyList] = useState<MapPropertyItem[]>(originalList); // 출력될 실제 데이터
  const [selectedOption, setSelectedOption] = useState<{ label: string; value: string } | null>( // 선택된 옵션
    null,
  );

  useEffect(() => {
    console.log("초기 originalList:", originalList);
  }, [originalList]);

  useEffect(() => {
    console.log("변경된 propertyList:", propertyList);
  }, [propertyList]);

  useEffect(() => {
    console.log("선택된 옵션:", selectedOption);
  }, [selectedOption]);

  // 높이 조절 훅
  const { listHeight, initialHeight, maxHeight, handleScroll } = useResizableScrollHeight({
    offset: 437,
    maxOffset: 200,
  });

  const markerPositions = useMemo(
    () =>
      propertyList.map((property) => ({
        order: property.order,
        propertyId: property.propertyId,
        latitude: property.latitude,
        longitude: property.longitude,
      })),
    [propertyList],
  );

  useEffect(() => {
    console.log("📍 markerPositions:", markerPositions);
  }, [markerPositions]);

  const handleSelect = (item: { label: string; value: string }) => {
    if (selectedOption?.value === item.value) {
      setSelectedOption(null);
      setPropertyList(originalList);
    } else {
      setSelectedOption(item);
      const sortedList = sortPropertyList(originalList, item.value); // 정렬 수행
      setPropertyList(sortedList);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        onInteractOutside={(e) => e.preventDefault()}
        className={cn(
          "fixed left-1/2 top-1/2 z-50 w-full max-w-[600px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-none bg-white p-0",
        )}
      >
        {/* 헤더 */}
        <Header bgColorClassName="bg-gray-100/0" size="sm">
          <Header.Prev
            onPrevClick={() => onOpenChange(false)}
            className="rounded-[20px] bg-white p-[6px]"
          />
          <Header.Title className="h-[36px] rounded-[100px] bg-white px-[24px] py-[6px]">
            {title}
          </Header.Title>
          <div className="w-6" />
        </Header>

        <div className="flex h-screen w-full flex-col">
          {/* 지도 */}
          <div className="flex h-[339px] items-center justify-center bg-gray-050 text-black">
            <MapViewer markerPoint={markerPositions} />
          </div>

          {/* 리스트  */}
          <div className="rounded-t-[16px]">
            {/* 리스트 해더 */}
            <div className="flex h-[46px] items-center justify-between rounded-t-[16px] bg-blue-050-bg px-[12px] py-[20px]">
              <div className="text-title4 text-blue-800">AI 추천매물</div>
              <div className="text-gray-900">
                <span className="text-title4">{properties.length}개</span>
                <span className="text-body1">의 매물</span>
              </div>
            </div>

            <div className="flex h-[52px] items-center justify-between border-b border-gray-300 px-[12px] py-[20px]">
              <SortFilter selectedOption={selectedOption} onSelect={handleSelect} />
              <div className="flex items-center gap-2">
                {/* <div className="flex gap-1">
                  <span>비교하기</span>
                  <ToggleCompare />
                </div> */}
                <DownloadExcel data={properties} type={type} />
              </div>
            </div>

            {/* 리스트 */}
            <div
              className="overflow-y-auto"
              style={{
                height: `${listHeight}px`,
                minHeight: `${initialHeight}px`,
                maxHeight: `${maxHeight}px`,
              }}
              onScroll={handleScroll}
            >
              <PropertyListComponent properties={propertyList} />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MapListDialog;

const sortPropertyList = (
  originalList: MapPropertyItem[],
  sortValue: string,
  type?: "bookmark" | "recentView",
) => {
  const result = [...originalList];

  const getUnifiedPrice = (item: MapPropertyItem): number => {
    if (type === "bookmark" || type === "recentView") {
      switch (item.tradeTypeName) {
        case "월세":
          return item.rentPrice ?? 0;
        case "전세":
          return item.warrantPrice ?? 0;
        case "매매":
          return item.dealPrice ?? 0;
        default:
          return 0;
      }
    } else {
      // 기본 정렬 기준 (type이 없을 때)
      switch (item.tradeTypeName) {
        case "월세":
          return item.rentPrice ?? 0;
        case "전세":
          return item.warrantPrice ?? 0;
        case "매매":
          return item.dealPrice ?? 0;
        default:
          return 0;
      }
    }
  };

  switch (sortValue) {
    case "high":
      result.sort((a, b) => getUnifiedPrice(b) - getUnifiedPrice(a));
      return result;

    case "low":
      result.sort((a, b) => getUnifiedPrice(a) - getUnifiedPrice(b));
      return result;

    case "wide":
      return result.sort(
        (a, b) => Math.floor(parseFloat(b.area2)) - Math.floor(parseFloat(a.area2)),
      );

    case "narrow":
      return result.sort(
        (a, b) => Math.floor(parseFloat(a.area2)) - Math.floor(parseFloat(b.area2)),
      );

    default:
      return originalList;
  }
};
