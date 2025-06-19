"use client";
import PropertyListSection from "@/components/common/PropertyListSection";
import RealEstateInfo from "@/components/real-estate/RealEstateInfo";
import { Header } from "@/layout/Header";
import { useRouter } from "next/navigation";
import RealEstateCallButton from "@/components/common/RealEstateCallButton";
import { useRealEstateInfoQuery } from "@/queries/real-estate/useRealEstateInfoQuery";
import { use } from "react";

const statsItems = [
  { label: "월세", value: "rent" },
  { label: "전세", value: "lease" },
  { label: "매매", value: "deal" },
];

const phoneNumbers = [
  { label: "registrationNumber", value: "010-1234-5678" },
  { label: "cellPhoneNo", value: "010-1234-5678" },
];

const RealEstatePage = ({ params }: { params: Promise<{ id: string }> }) => {
  const router = useRouter();
  const { id } = use(params);
  const realtyId = parseInt(id);

  // 부동산 정보
  const {
    data: realEstateInfoResponse,
    isLoading: isInfoLoading,
    error: infoError,
  } = useRealEstateInfoQuery(realtyId, { realtyId }, !!realtyId);

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
          propertyCount={{
            rent: realEstateData.rentCount,
            lease: realEstateData.leaseCount,
            deal: realEstateData.dealCount,
          }}
          realtyId={realtyId}
        />
      </div>
      <RealEstateCallButton phoneNumber={phoneNumbers} />
    </>
  );
};

export default RealEstatePage;
