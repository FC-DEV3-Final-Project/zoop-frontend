"use client";

import { use, useEffect } from "react";
import { useRouter } from "next/navigation";
import InfoBox from "@/components/property/detail/InfoBox";
import ScrollableSection from "@/components/property/detail/ScrollableSection";
import { Header } from "@/layout/Header";
import { useBasicInfoQuery } from "@/queries/property/detail/useBasicInfoQuery";
import RealEstateCallButton from "@/components/common/RealEstateCallButton";
import { useAgentQuery } from "@/queries/property/detail/useAgentQuery";
import { useAddRecentPropertyMutation } from "@/queries/mypage/useAddRecentPropertyMutation";
import NotFoundProperty from "@/components/property/detail/NotFoundProperty";
import SkeletonInfoBox from "@/components/property/detail/SkeletonInfoBox";

function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const propertyId = Number(id);
  const router = useRouter();

  const { data: basicInfo, isLoading, error } = useBasicInfoQuery(propertyId);
  const { data: agent, isLoading: agentLoading } = useAgentQuery(propertyId);
  const addRecentPropertyMutation = useAddRecentPropertyMutation();

  useEffect(() => {
    if (propertyId) {
      addRecentPropertyMutation.mutate(propertyId);
    }
  }, [propertyId]);

  if (isLoading) {
    return (
      <>
        <Header>
          <Header.Prev onPrevClick={() => router.back()} />
          <Header.Title>로딩 중...</Header.Title>
        </Header>
        <SkeletonInfoBox />
      </>
    );
  }

  if (!isLoading && (error || !basicInfo)) {
    return <NotFoundProperty />;
  }

  const { articleName } = basicInfo!;

  const phoneNumberOptions = agent
    ? [
        { label: "대표 전화", value: agent.representativeTelNo },
        { label: "휴대폰", value: agent.cellPhoneNo },
      ]
    : [];

  return (
    <>
      <Header>
        <Header.Prev onPrevClick={() => router.back()} />
        <Header.Title>{articleName}</Header.Title>
      </Header>

      <div className="flex flex-col gap-2">
        <InfoBox propertyInfo={basicInfo!} />
        <ScrollableSection propertyId={propertyId} />
      </div>

      {!agentLoading && phoneNumberOptions.length > 0 && (
        <RealEstateCallButton phoneNumber={phoneNumberOptions} />
      )}
    </>
  );
}

export default PropertyDetailPage;
