"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import InfoBox from "@/components/property/detail/InfoBox";
import ScrollableSection from "@/components/property/detail/ScrollableSection";
import { Header } from "@/layout/Header";
import { useQuery } from "@tanstack/react-query";
import { fetchBasicInfo } from "@/apis/property/detail/fetchBasicInfo";

function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const propertyId = Number(id);
  const router = useRouter();

  const {
    data: basicInfo,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["basicInfo", propertyId],
    queryFn: () => fetchBasicInfo(propertyId),
  });

  if (isLoading || error || !basicInfo) return null;

  return (
    <>
      <Header>
        <Header.Prev onPrevClick={() => router.back()} />
        <Header.Title>{basicInfo.articleName}</Header.Title>
      </Header>

      <div className="flex flex-col gap-2">
        <InfoBox propertyInfo={basicInfo} />
        <ScrollableSection propertyId={basicInfo.propertyId} />
      </div>
    </>
  );
}

export default PropertyDetailPage;
