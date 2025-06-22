"use client";

import { use } from "react";
import EnvironmentTabs from "@/components/property/review/EnvironmentTabs";
import ReviewList from "@/components/property/review/ReviewList";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Header } from "@/layout/Header";
import GoodBadSummary from "@/components/property/review/GoodBadSummary";
import { useReviewSummaryQuery } from "@/queries/property/review/useReviewSummaryQuery";
import { useBasicInfoQuery } from "@/queries/property/detail/useBasicInfoQuery";

const ReviewPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id: propertyIdString } = use(params);
  const propertyId = Number(propertyIdString);
  const router = useRouter();

  const { data: summaryData, isLoading: isSummaryLoading } = useReviewSummaryQuery(propertyId);
  const { data: basicInfo, isLoading: isBasicLoading } = useBasicInfoQuery(propertyId);

  if (isBasicLoading || !basicInfo) {
    return (
      <div className="px-5 py-4 text-body2 text-gray-500">기본 정보를 불러오는 중입니다...</div>
    );
  }

  const { articleName } = basicInfo;

  return (
    <div className="flex h-full flex-col bg-white">
      <Header>
        <Header.Prev onPrevClick={() => router.back()} />
        <Header.Title>{articleName}</Header.Title>
      </Header>

      {/* 본문 영역: overflow 스크롤 */}
      <div className="min-h-screen flex-1 overflow-y-auto">
        <div className="flex flex-col gap-6 p-5">
          <div className="text-title3 text-black">{articleName}</div>

          <div className="flex flex-col gap-4">
            <div className="text-subtitle2 text-black">AI 리뷰 분석</div>

            {isSummaryLoading || !summaryData ? (
              <div className="text-body2 text-gray-500">요약 데이터를 불러오는 중입니다...</div>
            ) : (
              <GoodBadSummary good={summaryData.good} bad={summaryData.bad} />
            )}

            <EnvironmentTabs propertyId={Number(propertyId)} />
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
