import { Header } from "@/layout/Header";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { ArrowLeft } from "lucide-react";
import PropertyCard from "../common/PropertyCard";
import BottomSheet from "../common/BottomSheet";
import { cn } from "@/lib/utils";
import ToggleCompare from "./ToggleCompare";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const sortOptions = [
  { label: "가격 높은 순", value: "high" },
  { label: "가격 낮은 순", value: "low" },
  { label: "면적 넓은 순", value: "wide " },
  { label: "면적 좁은 순", value: "narrow " },
];

const MapListDialog = ({ open, onOpenChange }: Props) => {
  const [selectedText, setSelectedText] = useState<{ label: string; value: string } | null>(null);

  useEffect(() => {
    if (!window.kakao || !open) return;

    window.kakao.maps.load(() => {
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(37.5665, 126.978), // 서울 중심 좌표
        level: 3,
      };

      new window.kakao.maps.Map(container, options);
    });
  }, [open]); // 다이얼로그 열릴 때만 실행

  const handleSelect = (item: { label: string; value: string }) => {
    if (selectedText?.value === item.value) {
      setSelectedText(null);
    } else {
      setSelectedText(item);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* <DialogContent className="flex h-screen w-full max-w-none flex-col overflow-hidden rounded-none p-0"> */}
      <DialogContent
        className={cn(
          "fixed left-1/2 top-1/2 z-50 w-full max-w-[600px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-none bg-white p-0",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "data-[state=closed]:scale-95 data-[state=open]:scale-100",
          "ease-in-out",

          // className={cn(
          //   "fixed left-1/2 top-1/2 z-50 w-full max-w-[600px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-none bg-white p-0",
          // "data-[state=open]:animate-in data-[state=closed]:animate-out",
          // "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          // "data-[state=closed]:scale-95 data-[state=open]:scale-100",
        )}
      >
        {/* 헤더 */}
        <Header bgColorClassName="bg-gray-100/0">
          <Header.Prev onPrevClick={() => alert("뒤로가기 클릭")} />
          <Header.Title>Guide</Header.Title>
        </Header>

        {/* 지도 + 리스트 생략 (여기에 구현한 UI 들어감) */}
        <div className="flex h-screen w-full flex-col">
          <div className="flex h-[339px] items-center justify-center bg-gray-050 text-black">
            <div id="map" className="h-full w-full" />
          </div>
          <div className="rounded-t-[16px]">
            <div className="flex h-[46px] items-center justify-between rounded-t-[16px] bg-blue-050-bg px-[12px] py-[20px]">
              <div className="text-title4 text-blue-800">ai 추천매물</div>
              <div className="text-gray-900">
                <span className="text-title4">10개</span>
                <span className="text-body1">의 매물</span>
              </div>
            </div>

            <div className="flex h-[52px] items-center justify-between border-b border-gray-300 px-[12px] py-[20px]">
              <BottomSheet
                trigger={
                  <button className="flex h-7 w-max cursor-pointer items-center gap-[3px] rounded-[100px] border border-[#E4E4E4] px-3 py-1 text-body2">
                    {selectedText?.label ?? "AI추천 순"}
                    <img src="/icons/arrow-down.svg" alt="화살표" className="h-3 w-3" />
                  </button>
                }
                title="정렬 방식"
              >
                {(close) =>
                  sortOptions.map((item) => {
                    const isSelected = item.value === selectedText?.value;
                    return (
                      <button
                        key={item.value}
                        className={`flex h-[48px] cursor-pointer items-center justify-start px-[20px] text-left text-body1 hover:bg-gray-200 ${
                          isSelected ? "bg-gray-200 text-subtitle2" : ""
                        }`}
                        onClick={() => {
                          console.log("선택된 항목:", item);
                          setSelectedText(item); // 필요시 선택 항목 반영
                          handleSelect(item);
                          close();
                        }}
                      >
                        {item.label}
                      </button>
                    );
                  })
                }
              </BottomSheet>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <span>비교하기</span>
                  <ToggleCompare />
                </div>
                <button>
                  <img src="/icons/excel.svg" alt="엑셀 다운" className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MapListDialog;
