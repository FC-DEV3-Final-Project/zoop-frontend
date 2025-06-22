"use client";

import { Header } from "@/layout/Header";
import React, { useEffect, useRef, useState } from "react";
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
import PropertyCard, { PropertyCardProps } from "../common/PropertyCard";
import BottomSheet from "../common/BottomSheet";
import { cn } from "@/lib/utils";
import ToggleCompare from "./ToggleCompare";

const dummyDate = {
  count: 10,
  properties: [
    {
      order: 1,
      propertyId: 1001,
      latitude: 37.5744,
      longitude: 127.04,
      articleName: "센트럴아파트 101동",
      tradeTypeName: "전세",
      rentPrice: null,
      warrantPrice: 3000,
      dealPrice: null,
      dealOrWarrantPrc: "3억",
      summary: ["신축", "역세권"],
      aptName: "센트럴아파트",
      buildingName: "101동",
      realEstateTypeName: "아파트",
      area2: "84.9",
      isBookmarked: true,
      imageUrl: "/imgs/propertyExample.png",
      direction: "남향",
      floorInfo: "10/15",
      exposureAddress: "서울시 강남구 역삼동",
      etcFeeAmount: 100000,
      moveInPossibleYmd: "2025-12-01",
      articleFeatureDesc: "햇살 좋은 집",
      detailDescription: "방 3, 거실 1, 욕실 2",
      realtorName: "센트럴공인중개사",
      representativeName: "홍길동",
      realtorAddress: "서울시 강남구 테헤란로 123",
      representativeTelNo: "02-1234-5678",
      cellPhoneNo: "010-1234-5678",
      maxBrokerFee: 500000,
      brokerFee: 300000,
    },
    {
      order: 2,
      propertyId: 1002,
      latitude: 37.4962,
      longitude: 126.9536,
      articleName: "해피빌 B동 103호",
      tradeTypeName: "월세",
      rentPrice: 50,
      warrantPrice: 1000,
      dealPrice: null,
      dealOrWarrantPrc: "보증금 1000 / 월세 50",
      summary: ["풀옵션", "역세권"],
      aptName: "해피빌",
      buildingName: "B동",
      realEstateTypeName: "오피스텔",
      area2: "32.5",
      isBookmarked: false,
      imageUrl: "",
      direction: "동향",
      floorInfo: "1/5",
      exposureAddress: "서울시 마포구 합정동",
      etcFeeAmount: 50000,
      moveInPossibleYmd: "2025-08-15",
      articleFeatureDesc: "역세권 + 풀옵션",
      detailDescription: "방 1, 욕실 1",
      realtorName: "해피공인",
      representativeName: "김철수",
      realtorAddress: "서울시 마포구 와우산로 45",
      representativeTelNo: "02-9876-5432",
      cellPhoneNo: "010-9876-5432",
      maxBrokerFee: 300000,
      brokerFee: 200000,
    },
    {
      order: 3,
      propertyId: 1003,
      latitude: 37.5299,
      longitude: 126.9644,
      articleName: "래미안하이클래스 202동",
      tradeTypeName: "매매",
      rentPrice: null,
      warrantPrice: 2400,
      dealPrice: 75000,
      dealOrWarrantPrc: "7억 5천",
      summary: ["공원 인접", "조용한 동네"],
      aptName: "래미안하이클래스",
      buildingName: "202동",
      realEstateTypeName: "아파트",
      area2: "112.3",
      isBookmarked: false,
      imageUrl: "",
      direction: "서향",
      floorInfo: "8/20",
      exposureAddress: "서울시 송파구 잠실동",
      etcFeeAmount: 120000,
      moveInPossibleYmd: "즉시입주",
      articleFeatureDesc: "초역세권 대단지 아파트",
      detailDescription: "방 4, 욕실 2, 팬트리",
      realtorName: "프리미엄공인",
      representativeName: "박진영",
      realtorAddress: "서울시 송파구 올림픽로 300",
      representativeTelNo: "02-1111-2222",
      cellPhoneNo: "010-3333-4444",
      maxBrokerFee: 800000,
      brokerFee: 700000,
    },
    {
      order: 4,
      propertyId: 1004,
      latitude: 37.6545,
      longitude: 127.0568,
      articleName: "서초자이 A동",
      tradeTypeName: "전세",
      rentPrice: null,
      warrantPrice: 20000,
      dealPrice: null,
      dealOrWarrantPrc: "2억",
      summary: ["신축", "엘리베이터"],
      aptName: "서초자이",
      buildingName: "A동",
      realEstateTypeName: "아파트",
      area2: "74.5",
      isBookmarked: true,
      imageUrl: "",
      direction: "남서향",
      floorInfo: "3/12",
      exposureAddress: "서울시 서초구 서초동",
      etcFeeAmount: 80000,
      moveInPossibleYmd: "2025-10-01",
      articleFeatureDesc: "서초역 도보 5분 거리",
      detailDescription: "방 2, 거실 1",
      realtorName: "서초공인",
      representativeName: "최유리",
      realtorAddress: "서울시 서초구 강남대로 123",
      representativeTelNo: "02-8765-4321",
      cellPhoneNo: "010-2222-3333",
      maxBrokerFee: 400000,
      brokerFee: 300000,
    },
    {
      order: 5,
      propertyId: 1005,
      latitude: 37.5509,
      longitude: 126.8495,
      articleName: "하이빌라 2층",
      tradeTypeName: "월세",
      rentPrice: 60,
      warrantPrice: 500,
      dealPrice: null,
      dealOrWarrantPrc: "보증금 500 / 월세 60",
      summary: ["역세권", "반려동물 가능"],
      aptName: "",
      buildingName: "하이빌라",
      realEstateTypeName: "빌라",
      area2: "45.3",
      isBookmarked: false,
      imageUrl: "",
      direction: "북향",
      floorInfo: "2/3",
      exposureAddress: "서울시 은평구 불광동",
      etcFeeAmount: 60000,
      moveInPossibleYmd: "2025-09-10",
      articleFeatureDesc: "반려동물 환영하는 조용한 집",
      detailDescription: "방 2, 욕실 1",
      realtorName: "은평공인",
      representativeName: "서정우",
      realtorAddress: "서울시 은평구 통일로 123",
      representativeTelNo: "02-1234-8888",
      cellPhoneNo: "010-9999-0000",
      maxBrokerFee: 200000,
      brokerFee: 180000,
    },
    {
      order: 6,
      propertyId: 1006,
      latitude: 37.6176,
      longitude: 126.9227,
      articleName: "더테라스하우스 C동",
      tradeTypeName: "전세",
      rentPrice: null,
      warrantPrice: 27000,
      dealPrice: null,
      dealOrWarrantPrc: "2억 7천",
      summary: ["신축", "테라스"],
      aptName: "더테라스하우스",
      buildingName: "C동",
      realEstateTypeName: "아파트",
      area2: "78.2",
      isBookmarked: true,
      imageUrl: "",
      direction: "남동향",
      floorInfo: "5/15",
      exposureAddress: "서울시 강서구 화곡동",
      etcFeeAmount: 90000,
      moveInPossibleYmd: "2026-02-01",
      articleFeatureDesc: "테라스 포함된 조용한 아파트",
      detailDescription: "방 3, 거실 1, 테라스 1",
      realtorName: "강서공인",
      representativeName: "한지민",
      realtorAddress: "서울시 강서구 곰달래로 111",
      representativeTelNo: "02-7777-8888",
      cellPhoneNo: "010-7777-8888",
      maxBrokerFee: 350000,
      brokerFee: 290000,
    },
    {
      order: 7,
      propertyId: 1007,
      latitude: 37.4836,
      longitude: 127.0325,
      articleName: "코지하우스 201호",
      tradeTypeName: "월세",
      rentPrice: 55,
      warrantPrice: 500,
      dealPrice: null,
      dealOrWarrantPrc: "보증금 500 / 월세 55",
      summary: ["역세권", "즉시입주"],
      aptName: "",
      buildingName: "코지하우스",
      realEstateTypeName: "다가구",
      area2: "40.0",
      isBookmarked: false,
      imageUrl: "",
      direction: "동향",
      floorInfo: "2/3",
      exposureAddress: "서울시 노원구 공릉동",
      etcFeeAmount: 50000,
      moveInPossibleYmd: "즉시입주",
      articleFeatureDesc: "깔끔하게 리모델링된 집",
      detailDescription: "원룸, 욕실 1",
      realtorName: "노원공인",
      representativeName: "이도현",
      realtorAddress: "서울시 노원구 동일로 456",
      representativeTelNo: "02-1111-0000",
      cellPhoneNo: "010-1212-3434",
      maxBrokerFee: 180000,
      brokerFee: 160000,
    },
    {
      order: 8,
      propertyId: 1008,
      latitude: 37.5063,
      longitude: 127.1144,
      articleName: "한강뷰자이 301동",
      tradeTypeName: "매매",
      rentPrice: null,
      warrantPrice: 1440,
      dealPrice: 82000,
      dealOrWarrantPrc: "8억 2천",
      summary: ["신축", "강 조망"],
      aptName: "한강뷰자이",
      buildingName: "301동",
      realEstateTypeName: "아파트",
      area2: "120.5",
      isBookmarked: true,
      imageUrl: "",
      direction: "남향",
      floorInfo: "15/20",
      exposureAddress: "서울시 용산구 이촌동",
      etcFeeAmount: 130000,
      moveInPossibleYmd: "2025-11-20",
      articleFeatureDesc: "한강 바로 앞 뷰",
      detailDescription: "방 4, 욕실 2, 드레스룸",
      realtorName: "용산공인",
      representativeName: "김지훈",
      realtorAddress: "서울시 용산구 한강로 99",
      representativeTelNo: "02-7654-3210",
      cellPhoneNo: "010-5656-7878",
      maxBrokerFee: 1000000,
      brokerFee: 900000,
    },
    {
      order: 9,
      propertyId: 1009,
      latitude: 37.5498,
      longitude: 126.9453,
      articleName: "에코빌아파트 3동",
      tradeTypeName: "전세",
      rentPrice: null,
      warrantPrice: 18000,
      dealPrice: null,
      dealOrWarrantPrc: "1억 8천",
      summary: ["저층", "주차가능"],
      aptName: "에코빌아파트",
      buildingName: "3동",
      realEstateTypeName: "아파트",
      area2: "60.4",
      isBookmarked: false,
      imageUrl: "",
      direction: "남향",
      floorInfo: "1/5",
      exposureAddress: "서울시 동작구 상도동",
      etcFeeAmount: 70000,
      moveInPossibleYmd: "2026-01-01",
      articleFeatureDesc: "저층이지만 햇살 잘 드는 집",
      detailDescription: "방 2, 욕실 1",
      realtorName: "동작공인",
      representativeName: "장민호",
      realtorAddress: "서울시 동작구 상도로 123",
      representativeTelNo: "02-5555-6666",
      cellPhoneNo: "010-1111-2222",
      maxBrokerFee: 250000,
      brokerFee: 220000,
    },
    {
      order: 10,
      propertyId: 1010,
      latitude: 37.4979,
      longitude: 127.0276,
      articleName: "미니빌 1층",
      tradeTypeName: "월세",
      rentPrice: 45,
      warrantPrice: 400000,
      dealPrice: null,
      dealOrWarrantPrc: "보증금 300 / 월세 45",
      summary: ["1인가구 추천", "역 근처"],
      aptName: "",
      buildingName: "미니빌",
      realEstateTypeName: "원룸",
      area2: "28.0",
      isBookmarked: false,
      imageUrl: "",
      direction: "북동향",
      floorInfo: "1/2",
      exposureAddress: "서울시 동대문구 이문동",
      etcFeeAmount: 400000,
      moveInPossibleYmd: "2025-09-05",
      articleFeatureDesc: "혼자 살기 좋은 컴팩트 원룸",
      detailDescription: "원룸, 욕실 1, 작은 부엌",
      realtorName: "이문공인",
      representativeName: "정해인",
      realtorAddress: "서울시 동대문구 왕산로 45",
      representativeTelNo: "02-2222-4444",
      cellPhoneNo: "010-3333-2222",
      maxBrokerFee: 150000,
      brokerFee: 120000,
    },
  ],
};

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const sortOptions = [
  { label: "가격 높은 순", value: "high" },
  { label: "가격 낮은 순", value: "low" },
  { label: "면적 넓은 순", value: "wide" },
  { label: "면적 좁은 순", value: "narrow" },
];

const MapListDialog = ({ open, onOpenChange }: Props) => {
  const [originalList] = useState<any[]>(dummyDate.properties); // 정렬할 대상
  const [propertyList, setPropertyList] = useState<any[]>(dummyDate.properties);
  const [selectedText, setSelectedText] = useState<{ label: string; value: string } | null>(null);

  const positions = dummyDate.properties.map((item) => ({
    latitude: item.latitude,
    longitude: item.longitude,
  }));

  const mapElement = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    // kakao 객체가 브라우저에서 존재하는지 확인
    const { kakao } = window;
    if (!kakao) return;

    // dialog가 완전히 그려진 뒤 실행되도록 지연
    const timeoutId = setTimeout(() => {
      kakao.maps.load(() => {
        if (!mapElement.current) return;
        // 지도 생성
        const map = new kakao.maps.Map(mapElement.current!, {
          center: new kakao.maps.LatLng(37.5665, 126.978), // 지도의 중심좌표
          level: 9,
        });

        // positions 배열의 각 좌표마다 숫자 마커 생성
        positions.forEach((item, i) => {
          const latlng = new window.kakao.maps.LatLng(item.latitude, item.longitude);

          // 숫자 마커로 사용할 img URL (스프라이트 방식)
          const markerImg =
            "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png";

          // 마커 이미지 전체 사이즈
          const markerImgSize = new window.kakao.maps.Size(36, 37);

          // 스프라이트 이미지에서 몇 번째 숫자를 쓸지 계산
          const imgOptions = {
            spriteSize: new window.kakao.maps.Size(36, 691), // 전체 스프라이트 크기
            spriteOrigin: new window.kakao.maps.Point(0, i * 46 + 10), // 현재 index의 숫자 위치
            offset: new window.kakao.maps.Point(13, 37), // 마커 위치 보정
          };
          // 마커 이미지 객체 생성
          const markerImage = new window.kakao.maps.MarkerImage(
            markerImg,
            markerImgSize,
            imgOptions,
          );

          // 마커 생성 및 지도에 표시
          new window.kakao.maps.Marker({
            map,
            position: latlng,
            image: markerImage,
          });
        });
      });
    }, 100); // 100ms 후에 실행
  }, [open]);

  const sortPropertyList = (list: any[], sortValue: string) => {
    const sorted = [...list];

    switch (sortValue) {
      case "high":
        sorted.sort((a, b) => b.warrantPrice - a.warrantPrice);
        console.log(
          "매물 아이디: ",
          sorted.map((v) => v.propertyId),
          "💰 가격 높은 순:",
          sorted.map((v) => v.warrantPrice),
        );
        return sorted;

      case "low":
        sorted.sort((a, b) => a.warrantPrice - b.warrantPrice);
        console.log(
          "매물 아이디: ",
          sorted.map((v) => v.propertyId),
          "💰 가격 낮은 순:",
          sorted.map((v) => v.warrantPrice),
        );
        return sorted;

      case "wide":
        sorted.sort((a, b) => {
          const areaA = Math.floor(parseFloat(a.area2));
          const areaB = Math.floor(parseFloat(b.area2));
          return areaB - areaA;
        });
        console.log(
          "매물 아이디: ",
          sorted.map((v) => v.propertyId),
          "📏 면적 넓은 순:",
          sorted.map((v) => v.area2),
        );
        return sorted;

      case "narrow":
        sorted.sort((a, b) => {
          const areaA = Math.floor(parseFloat(a.area2));
          const areaB = Math.floor(parseFloat(b.area2));
          return areaA - areaB; // 좁은 순
        });
        console.log(
          "매물 아이디: ",
          sorted.map((v) => v.propertyId),
          "📏 면적 좁은 순:",
          sorted.map((v) => Math.floor(parseFloat(v.area2))),
        );
        return sorted;

      default:
        return list;
    }
  };

  const handleSelect = (item: { label: string; value: string }) => {
    if (selectedText?.value === item.value) {
      setSelectedText(null);
      setPropertyList(originalList);
    } else {
      setSelectedText(item);
      const sorted = sortPropertyList(propertyList, item.value);
      setPropertyList(sorted);
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
          <Header.Prev onPrevClick={() => onOpenChange(false)} />
          <Header.Title>Guide</Header.Title>
        </Header>

        {/* 지도 + 리스트 생략 (여기에 구현한 UI 들어감) */}
        <div className="flex h-screen w-full flex-col">
          <div className="flex h-[339px] items-center justify-center bg-gray-050 text-black">
            <div ref={mapElement} id="map" className="h-full w-full" />
          </div>
          <div className="rounded-t-[16px]">
            <div className="flex h-[46px] items-center justify-between rounded-t-[16px] bg-blue-050-bg px-[12px] py-[20px]">
              <div className="text-title4 text-blue-800">ai 추천매물</div>
              <div className="text-gray-900">
                <span className="text-title4">{dummyDate.count}개</span>
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
            <div
              className="flex flex-col overflow-y-auto"
              style={{ maxHeight: "calc(100vh - 339px - 46px - 52px)" }}
            >
              {/* 리스트 영역 */}
              {propertyList.map((property) => (
                <div key={property.propertyId}>
                  <PropertyCard
                    key={property.propertyId}
                    propertyId={property.propertyId}
                    order={property.order}
                    tradeTypeName={property.tradeTypeName}
                    summary={property.summary || []}
                    realEstateTypeName={property.realEstateTypeName}
                    dealOrWarrantPrc={property.dealOrWarrantPrc}
                    buildingName={property.buildingName}
                    area2={property.area2}
                    isBookmarked={true}
                    imageUrl={property.imageUrl}
                    rentPrice={property.rentPrice || undefined}
                    aptName={property.aptName}
                    articleName={property.articleName}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MapListDialog;
