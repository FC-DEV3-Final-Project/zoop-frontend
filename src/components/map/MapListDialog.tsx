import { Header } from "@/layout/Header";
import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ArrowLeft } from "lucide-react";
import PropertyCard from "../common/PropertyCard";
import BottomSheet from "../common/BottomSheet";

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

  const handleSelect = (item: { label: string; value: string }) => {
    if (selectedText?.value === item.value) {
      setSelectedText(null);
    } else {
      setSelectedText(item);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex h-screen w-full max-w-none flex-col overflow-hidden rounded-none p-0">
        {/* 헤더 */}
        <Header bgColorClassName="bg-gray-100/0">
          <Header.Prev onPrevClick={() => alert("뒤로가기 클릭")} />
          <Header.Title>Guide</Header.Title>
        </Header>

        {/* 지도 + 리스트 생략 (여기에 구현한 UI 들어감) */}
        <div className="flex h-screen w-full max-w-[600px] flex-col">
          <div className="flex h-[339px] items-center justify-center bg-[#EDF0FD] text-black">
            지도UI
          </div>
          <div className="flex-1 overflow-y-auto bg-gray-100 pt-4">
            <div className="flex px-4">
              <div className="h-12">AI 추천 매물</div>

              <div className="h-13">
                <BottomSheet
                  trigger={
                    <button className="flex w-max cursor-pointer items-center gap-[3px] rounded-[100px] border border-[#E4E4E4] px-3 py-1">
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
              </div>
            </div>
            <PropertyCard
              id={1}
              order={1}
              imageUrl="/imgs/propertyExample.png"
              transactionType="전세"
              price="5억 3,000"
              address="방배마에스트로{주상복합}"
              detailAddress="101동 703호"
              buildingType="아파트"
              area="34.5㎡"
              tags={["풀옵션", "xx역 도보 n분", "대학교 인접", "주차공간 있음", "반려동물 가능"]}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MapListDialog;
