"use client";
import PropertyListSection from "@/components/common/PropertyListSection";
import { Button } from "@/components/ui/button";
import RealEstateInfo from "@/components/real-estate/RealEstateInfo";

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

  return (
    <>
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
