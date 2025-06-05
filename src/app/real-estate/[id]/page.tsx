"use client";
import PropertyListSection from "@/components/common/PropertyListSection";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const tabOptions = [
  { label: "월세", value: "rent" },
  { label: "전세", value: "lease" },
  { label: "매매", value: "sale" },
];

const Properties = [
  {
    id: 1,
    imageUrl: "/imgs/propertyExample.png",
    transactionType: "전세",
    price: "5억 3,000",
    buildingType: "주상복합",
    area: "34.5㎡",
    address: "방배마에스트로",
    detailAddress: "1동 703호",
    tags: ["풀옵션", "xx역 도보 n분", "대학교 인접"],
  },
  {
    id: 2,
    imageUrl: "/imgs/propertyExample.png",
    transactionType: "전세",
    price: "2억 7,500",
    buildingType: "주상복합",
    area: "38.67㎡",
    address: "방배마에스트로",
    detailAddress: "201동 1103호",
    tags: ["헬스장 근처", "카페많음", "대학교 인접"],
  },
  {
    id: 3,
    imageUrl: "/imgs/propertyExample.png",
    transactionType: "전세",
    price: "5억 3,000",
    buildingType: "주상복합",
    area: "34.5㎡",
    address: "방배마에스트로",
    detailAddress: "1동 703호",
    tags: ["풀옵션", "xx역 도보 n분", "대학교 인접"],
  },
  {
    id: 4,
    imageUrl: "/imgs/propertyExample.png",
    transactionType: "전세",
    price: "2억 7,500",
    buildingType: "주상복합",
    area: "38.67㎡",
    address: "방배마에스트로",
    detailAddress: "201동 1103호",
    tags: ["헬스장 근처", "카페많음", "대학교 인접"],
  },
  {
    id: 5,
    imageUrl: "/imgs/propertyExample.png",
    transactionType: "전세",
    price: "5억 3,000",
    buildingType: "주상복합",
    area: "34.5㎡",
    address: "방배마에스트로",
    detailAddress: "1동 703호",
    tags: ["풀옵션", "xx역 도보 n분", "대학교 인접"],
  },
  {
    id: 6,
    imageUrl: "/imgs/propertyExample.png",
    transactionType: "전세",
    price: "2억 7,500",
    buildingType: "주상복합",
    area: "38.67㎡",
    address: "방배마에스트로",
    detailAddress: "201동 1103호",
    tags: ["헬스장 근처", "카페많음", "대학교 인접"],
  },
];

export default function RealEstatePage({ params }: { params: { id: string } }) {
  const textRef = useRef<HTMLDivElement>(null);
  const [isTruncated, setIsTruncated] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const lineHeight = parseFloat(getComputedStyle(el).lineHeight);

    if (el.scrollHeight > lineHeight + 1) {
      setIsTruncated(true);
    }
  }, []);

  return (
    <>
      <div className="flex flex-col gap-3 bg-white p-5">
        <div className="text-center text-xl font-semibold leading-7 text-black">
          일등 부동산 공인중개사사무소
        </div>
        <div className="flex gap-5">
          {/* 프로필/대표 */}
          <div className="flex w-24 min-w-24 max-w-24 flex-shrink-0 flex-col items-center gap-1">
            {/* 프로필 */}
            <div className="h-24 w-full rounded-lg bg-black" />
            {/* 대표 */}
            <div className="flex w-full items-center justify-center gap-1">
              <div className="text-xs font-medium leading-none text-black">대표</div>
              <div className="text-sm font-semibold leading-tight text-black">김정순</div>
            </div>
          </div>
          {/* 정보 영역 */}
          <div className="flex flex-col gap-1">
            <div className="flex h-24 flex-col gap-[3px]">
              <div className="flex items-center gap-1">
                <div className="text-xs font-medium leading-none text-black">등록번호</div>
                <div className="flex items-center rounded-lg bg-zinc-100 px-2 py-0.5">
                  <div className="text-xs font-medium leading-none text-black">44862989</div>
                </div>
              </div>
              <div className="flex w-full items-start gap-2">
                <div className="whitespace-nowrap text-xs font-medium text-black">주소</div>
                <div
                  ref={textRef}
                  className={`pr-6 text-xs font-medium text-black transition-all ${
                    isExpanded ? "line-clamp-none" : "line-clamp-1"
                  }`}
                >
                  경기도 수원시 장안구 경수대로 1083 1층 경기도 수원시 장안구 경수대로 1083 1층
                </div>
                {isTruncated && (
                  <img
                    src={isExpanded ? "/icons/arrow-up.svg" : "/icons/arrow-down.svg"}
                    alt={isExpanded ? "접기" : "더보기"}
                    className="h-4 w-4 cursor-pointer"
                    onClick={() => setIsExpanded(!isExpanded)}
                  />
                )}
              </div>
              <div className="flex items-center gap-2">
                <div className="text-xs font-medium leading-none text-black">
                  최근 3개월 집주인확인
                </div>
                <div className="text-xs font-semibold leading-none text-black">169건</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-xs font-medium leading-none text-blue-700">영업중</div>
                <div className="text-xs font-semibold leading-none text-black">10:00~</div>
              </div>
            </div>
            <div className="flex w-full items-center gap-1">
              <div className="flex items-center gap-0.5">
                <div className="text-sm font-medium leading-tight text-black">매매</div>
                <div className="text-sm font-semibold leading-tight text-blue-700">30</div>
              </div>
              <div className="flex items-center gap-0.5">
                <div className="text-sm font-medium leading-tight text-black">전세</div>
                <div className="text-sm font-semibold leading-tight text-blue-700">4</div>
              </div>
              <div className="flex items-center gap-0.5">
                <div className="text-sm font-medium leading-tight text-black">월세</div>
                <div className="text-sm font-semibold leading-tight text-blue-700">19</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PropertyListSection
        showMapViewButton={false}
        tabOptions={tabOptions}
        propertyMap={{
          rent: Properties,
          lease: Properties,
          sale: Properties,
        }}
      />
      {/* 공인중개사에게 전화 걸기 버튼 */}
      <div className="fixed bottom-4 left-1/2 w-full -translate-x-1/2 bg-white px-5 py-3">
        <Button variant="default">공인중개사에게 전화 걸기</Button>
      </div>
    </>
  );
}
