"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import EmptyListMessage from "@/components/common/EmptyListMessage";
import { Header } from "@/layout/Header";
import ReviewList from "@/components/property/review/ReviewList";
import EnvironmentTabs from "@/components/property/review/EnvironmentTabs";
import GoodBadSummary from "@/components/property/review/GoodBadSummary";
import { useBasicInfoQuery } from "@/queries/property/detail/useBasicInfoQuery";
import { useReviewSummaryQuery } from "@/queries/property/review/useReviewSummaryQuery";

const ReviewPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id: propertyIdString } = use(params);
  const propertyId = Number(propertyIdString);
  const router = useRouter();

  const { data: basicInfo, isLoading: isBasicLoading } = useBasicInfoQuery(propertyId);
  const { data: summaryData, isLoading: isSummaryLoading } = useReviewSummaryQuery(propertyId);

  if (isBasicLoading || !basicInfo) {
    return (
      <div className="px-5 py-4 text-body2 text-gray-500">기본 정보를 불러오는 중입니다...</div>
    );
  }

  const { articleName } = basicInfo;

  const hasSummaryData =
    summaryData &&
    (summaryData.good.length > 0 ||
      summaryData.bad.length > 0 ||
      summaryData.tra.length > 0 ||
      summaryData.edu.length > 0 ||
      summaryData.loc.length > 0 ||
      summaryData.hel.length > 0);

  const environmentTabsData = hasSummaryData
    ? [
        { name: "교통 환경", value: "transport", content: summaryData.tra },
        { name: "학군", value: "school", content: summaryData.edu },
        { name: "주변 시설", value: "facility", content: summaryData.loc },
        { name: "의료 시설", value: "hospital", content: summaryData.hel },
      ].filter((tab) => tab.content.length > 0)
    : [];

  return (
    <div className="flex h-full flex-col bg-white">
      <Header>
        <Header.Prev onPrevClick={() => router.back()} />
        <Header.Title>{articleName}</Header.Title>
      </Header>

      <div className="min-h-screen flex-1 overflow-y-auto">
        <div className="flex flex-col gap-6 p-5">
          <div className="text-title3 text-black">{articleName}</div>

          <div className="flex flex-col gap-4">
            <div className="text-subtitle2 text-black">AI 리뷰 분석</div>

            {isSummaryLoading ? (
              <div className="space-y-2">
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-5 w-1/2" />
              </div>
            ) : !hasSummaryData ? (
              <EmptyListMessage message="아직 AI 기반 리뷰 분석 결과가 없습니다." />
            ) : (
              <>
                <GoodBadSummary good={summaryData?.good ?? []} bad={summaryData?.bad ?? []} />
                <EnvironmentTabs tabs={environmentTabsData} isLoading={false} />
              </>
            )}
          </div>
        </div>

        <ReviewList propertyId={propertyId} />
      </div>

      <div className="sticky bottom-0 left-0 w-full bg-white px-5 py-3">
        <Button
          variant="default"
          className="w-full"
          onClick={() => router.push(`/property/${propertyId}/review/new`)}
        >
          리뷰 작성하기
        </Button>
      </div>
    </div>
  );
};

export default ReviewPage;
