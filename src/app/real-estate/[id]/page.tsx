"use client";
import PropertyListSection from "@/components/common/PropertyListSection";
import RealEstateInfo from "@/components/real-estate/RealEstateInfo";
import { Header } from "@/layout/Header";
import { useRouter } from "next/navigation";
import RealEstateCallButton from "@/components/common/RealEstateCallButton";
import { useRealEstateInfoQuery } from "@/queries/real-estate/useRealEstateInfoQuery";
import { useRealEstatePropertiesQuery } from "@/queries/real-estate/useRealEstatePropertiesQuery";
import { use, useState, useRef } from "react";

const statsItems = [
  { label: "월세", value: "rent" },
  { label: "전세", value: "lease" },
  { label: "매매", value: "deal" },
];

const phoneNumbers = [
  { label: "registrationNumber", value: "010-1234-5678" },
  { label: "cellPhoneNo", value: "010-1234-5678" },
];

// 탭 값과 tradeType 매핑
const tabToTradeType = {
  rent: "월세",
  lease: "전세",
  deal: "매매",
};

const RealEstatePage = ({ params }: { params: Promise<{ id: string }> }) => {
  const router = useRouter();
  const { id } = use(params);
  const realtyId = parseInt(id);
  const [selectedTab, setSelectedTab] = useState("rent"); // 기본값은 월세
  const emptyRef = useRef<HTMLDivElement>(null);

  // 부동산 정보
  const {
    data: realEstateInfoResponse,
    isLoading: isInfoLoading,
    error: infoError,
  } = useRealEstateInfoQuery(realtyId, { realtyId }, !!realtyId);

  // 선택된 탭에 따른 매물 조회
  const {
    items: propertiesData,
    loader: propertiesLoader,
    hasMore: propertiesHasMore,
    loading: isPropertiesLoading,
  } = useRealEstatePropertiesQuery(
    realtyId,
    tabToTradeType[selectedTab as keyof typeof tabToTradeType],
    20,
  );

  if (isInfoLoading) {
    return (
      <>
        <Header>
          <Header.Prev onPrevClick={() => router.back()} />
          <Header.Title>로딩 중...</Header.Title>
        </Header>
        <div className="flex h-64 items-center justify-center">
          <div>부동산 정보를 불러오는 중...</div>
        </div>
      </>
    );
  }

  if (infoError || !realEstateInfoResponse || !realEstateInfoResponse.data) {
    return (
      <>
        <Header>
          <Header.Prev onPrevClick={() => router.back()} />
          <Header.Title>오류</Header.Title>
        </Header>
        <div className="flex h-64 items-center justify-center">
          <div>부동산 정보를 불러올 수 없습니다.</div>
        </div>
      </>
    );
  }

  const realEstateData = {
    ...realEstateInfoResponse.data,
    statsItems,
  };

  // 매물 데이터 추출
  const properties =
    propertiesData?.map((property) => ({
      ...property,
    })) || [];

  return (
    <>
      <Header>
        <Header.Prev onPrevClick={() => router.back()} />
        <Header.Title>{realEstateData.realtorName}</Header.Title>
      </Header>
      <RealEstateInfo {...realEstateData} />
      <div className="pb-[76px]">
        <PropertyListSection
          showMapViewButton={false}
          tabOptions={statsItems}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          propertyCount={{
            rent: realEstateData.rentCount,
            lease: realEstateData.leaseCount,
            deal: realEstateData.dealCount,
          }}
          propertyMap={{
            rent: selectedTab === "rent" ? properties : [],
            lease: selectedTab === "lease" ? properties : [],
            deal: selectedTab === "deal" ? properties : [],
          }}
          loaders={{
            rent: selectedTab === "rent" ? propertiesLoader : emptyRef,
            lease: selectedTab === "lease" ? propertiesLoader : emptyRef,
            deal: selectedTab === "deal" ? propertiesLoader : emptyRef,
          }}
          hasMore={{
            rent: selectedTab === "rent" ? propertiesHasMore : false,
            lease: selectedTab === "lease" ? propertiesHasMore : false,
            deal: selectedTab === "deal" ? propertiesHasMore : false,
          }}
          loading={{
            rent: selectedTab === "rent" ? isPropertiesLoading : false,
            lease: selectedTab === "lease" ? isPropertiesLoading : false,
            deal: selectedTab === "deal" ? isPropertiesLoading : false,
          }}
        />
      </div>
      <RealEstateCallButton phoneNumber={phoneNumbers} />
    </>
  );
};

export default RealEstatePage;
