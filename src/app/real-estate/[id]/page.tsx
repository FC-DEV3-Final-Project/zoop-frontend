"use client";
import PropertyListSection from "@/components/common/PropertyListSection";
import { Button } from "@/components/ui/button";
import RealEstateInfo from "@/components/real-estate/RealEstateInfo";
import { Header } from "@/layout/Header";
import { useRouter } from "next/navigation";

const statsItems = [
  { label: "월세", value: "rent" },
  { label: "전세", value: "lease" },
  { label: "매매", value: "sale" },
];

const realEstateData = {
  name: "일등 부동산 공인중개사사무소",
  representative: "김정순",
  registrationNumber: "44862989",
  phone: "031-271-5309, 010-8711-6151",
  address:
    "경기도 수원시 장안구 경수대로 1083 1층 경기도 수원시 장안구 경수대로 1083 1층 경기도 수원시 장안구 경수대로 1083 1층",
  sale: 30,
  lease: 4,
  rent: 19,
  statsItems,
};

const properties = [
  {
    propertyId: 1,
    order: 1,
    tradeTypeName: "전세",
    rentPrice: undefined,
    warrantPrice: 53000,
    dealPrice: 0,
    dealOrWarrantPrc: "5억 3,000",
    summary: ["풀옵션", "xx역 도보 n분", "대학교 인접"],
    realestateTypeName: "주상복합",
    aptName: "방배마에스트로",
    articleName: "방배마에스트로",
    buildingName: "1동 703호",
    area2: "34.5",
    isBookmarked: false,
    isActive: true,
    imageUrl: "/imgs/propertyExample.png",
    latitude: 37.471515,
    longitude: 126.972487,
  },
  {
    propertyId: 2,
    order: 2,
    tradeTypeName: "전세",
    rentPrice: undefined,
    warrantPrice: 27500,
    dealPrice: 0,
    dealOrWarrantPrc: "2억 7,500",
    summary: ["헬스장 근처", "카페많음", "대학교 인접"],
    realestateTypeName: "주상복합",
    aptName: "방배마에스트로",
    articleName: "방배마에스트로",
    buildingName: "201동 1103호",
    area2: "38.67",
    isBookmarked: false,
    isActive: true,
    imageUrl: "/imgs/propertyExample.png",
    latitude: 37.471515,
    longitude: 126.972487,
  },
  {
    propertyId: 3,
    order: 3,
    tradeTypeName: "전세",
    rentPrice: undefined,
    warrantPrice: 53000,
    dealPrice: 0,
    dealOrWarrantPrc: "5억 3,000",
    summary: ["풀옵션", "xx역 도보 n분", "대학교 인접"],
    realestateTypeName: "주상복합",
    aptName: "방배마에스트로",
    articleName: "방배마에스트로",
    buildingName: "1동 703호",
    area2: "34.5",
    isBookmarked: false,
    isActive: true,
    imageUrl: "/imgs/propertyExample.png",
    latitude: 37.471515,
    longitude: 126.972487,
  },
  {
    propertyId: 4,
    order: 4,
    tradeTypeName: "전세",
    rentPrice: undefined,
    warrantPrice: 27500,
    dealPrice: 0,
    dealOrWarrantPrc: "2억 7,500",
    summary: ["헬스장 근처", "카페많음", "대학교 인접"],
    realestateTypeName: "주상복합",
    aptName: "방배마에스트로",
    articleName: "방배마에스트로",
    buildingName: "201동 1103호",
    area2: "38.67",
    isBookmarked: false,
    isActive: true,
    imageUrl: "/imgs/propertyExample.png",
    latitude: 37.471515,
    longitude: 126.972487,
  },
  {
    propertyId: 5,
    order: 5,
    tradeTypeName: "전세",
    rentPrice: undefined,
    warrantPrice: 53000,
    dealPrice: 0,
    dealOrWarrantPrc: "5억 3,000",
    summary: ["풀옵션", "xx역 도보 n분", "대학교 인접"],
    realestateTypeName: "주상복합",
    aptName: "방배마에스트로",
    articleName: "방배마에스트로",
    buildingName: "1동 703호",
    area2: "34.5",
    isBookmarked: false,
    isActive: true,
    imageUrl: "/imgs/propertyExample.png",
    latitude: 37.471515,
    longitude: 126.972487,
  },
  {
    propertyId: 6,
    order: 6,
    tradeTypeName: "전세",
    rentPrice: undefined,
    warrantPrice: 27500,
    dealPrice: 0,
    dealOrWarrantPrc: "2억 7,500",
    summary: ["헬스장 근처", "카페많음", "대학교 인접"],
    realestateTypeName: "주상복합",
    aptName: "방배마에스트로",
    articleName: "방배마에스트로",
    buildingName: "201동 1103호",
    area2: "38.67",
    isBookmarked: false,
    isActive: true,
    imageUrl: "/imgs/propertyExample.png",
    latitude: 37.471515,
    longitude: 126.972487,
  },
];

export default function RealEstatePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  return (
    <>
      <Header>
        <Header.Prev onPrevClick={() => router.back()} />
        <Header.Title>{realEstateData.name}</Header.Title>
      </Header>
      <RealEstateInfo {...realEstateData} />
      <div className="pb-[76px]">
        <PropertyListSection
          showMapViewButton={false}
          tabOptions={statsItems}
          propertyMap={{
            rent: properties,
            lease: properties,
            sale: properties,
          }}
        />
      </div>
      {/* 공인중개사에게 전화 걸기 버튼 */}
      <div className="fixed bottom-0 left-1/2 w-full max-w-[600px] -translate-x-1/2 bg-white px-5 py-3">
        <Button variant="default">공인중개사에게 전화 걸기</Button>
      </div>
    </>
  );
}
