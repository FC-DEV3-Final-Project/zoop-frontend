"use client";

import { Header } from "@/layout/Header";
import React, { useMemo, useState } from "react";

import { cn } from "@/lib/utils";
// import ToggleCompare from "./ToggleCompare";
import SortFilter from "./SortFilter";
import PropertyListComponent from "./PropertyList";
import DownloadExcel from "./excel/DownloadExcel";
import MapViewer from "./MapViewer";
import { useResizableScrollHeight } from "@/hooks/property/useResizableScrollHeight";
import { MapPropertyItem } from "@/types/map";
import { Dialog, DialogContent } from "../ui/mapDialog";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  properties: MapPropertyItem[];
  title: string;
  type?: "bookmark" | "recentView";
}

const MapListDialog = ({ open, onOpenChange, properties, title, type }: Props) => {
  // props로 받은 매물 데이터를 초기 원본 리스트로 설정
  const [originalList] = useState<MapPropertyItem[]>(properties);

  // 화면에 표시될 실제 리스트 상태값
  const [propertyList, setPropertyList] = useState<MapPropertyItem[]>(originalList);

  // 선택된 정렬 옵션 상태값
  const [selectedOption, setSelectedOption] = useState<{ label: string; value: string } | null>(
    null,
  );

  // 리스트 스크롤 높이 자동 조절
  const { listHeight, initialHeight, maxHeight, handleScroll } = useResizableScrollHeight({
    offset: 437,
    maxOffset: 200,
  });

  // 지도 마커에 표시될 좌표 정보 추출
  const markerPositions = useMemo(
    () =>
      propertyList.map(({ order, propertyId, latitude, longitude }) => ({
        order,
        propertyId,
        latitude,
        longitude,
      })),
    [propertyList],
  );

  // 정렬 옵션 선택 시 호출되는 함수
  const handleSelect = (item: { label: string; value: string }) => {
    if (selectedOption?.value === item.value) {
      setSelectedOption(null);
      setPropertyList(originalList);
    } else {
      setSelectedOption(item);
      const sorted = sortPropertyList(originalList, item.value, type);
      setPropertyList(sorted);
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

            {/* 정렬 및 엑셀 다운로드 버튼 */}
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

            {/* 매물 리스트 */}
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
