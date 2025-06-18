"use client";

import { use } from "react";
import EnvironmentTabs from "@/components/property/review/EnvironmentTabs";
import ReviewList from "@/components/property/review/ReviewList";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Header } from "@/layout/Header";

const ReviewPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const propertyId = Number(id);
  const router = useRouter();

  return (
    <div className="flex h-full flex-col bg-white">
      <Header>
        <Header.Prev onPrevClick={() => router.back()} />
        <Header.Title>방배</Header.Title>
      </Header>
      {/* 본문 영역: overflow 스크롤 */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col gap-6 p-5">
          <div className="text-title3 text-black">방배마에스트로(주상복합) 아파트</div>

          <div className="flex flex-col gap-4">
            <div className="text-subtitle2 text-black">AI 리뷰 분석</div>

            <div className="flex w-full flex-row justify-between gap-[14px]">
              {/* 왼쪽: 점수 + 별 */}
              <div className="flex basis-1/2 flex-col items-center gap-3 px-2 py-[10px]">
                <div className="w-full text-center text-largeTitle text-black">4.46</div>
                <div className="flex">
                  <img src="/icons/star-filled.svg" alt="filled-star" width={24} height={24} />
                  <img src="/icons/star-filled.svg" alt="filled-star" width={24} height={24} />
                  <img src="/icons/star-filled.svg" alt="filled-star" width={24} height={24} />
                  <img src="/icons/star-filled.svg" alt="filled-star" width={24} height={24} />
                  <img src="/icons/star-unfilled.svg" alt="unfilled-star" width={24} height={24} />
                </div>
              </div>

              {/* 오른쪽: 그래프 */}
              <div className="flex basis-1/2 flex-col justify-center gap-2 px-2">
                {["교통 환경", "주거 환경", "교육 환경", "주변 시설"].map((label, i) => (
                  <div key={i} className="flex items-center gap-[7px]">
                    <span className="shrink-0 whitespace-nowrap text-right text-body3 text-black">
                      {label}
                    </span>
                    <div className="h-[6px] w-full rounded-full bg-blue-100">
                      <div
                        className="h-full rounded-full bg-blue-800-primary"
                        style={{ width: ["100%", "85%", "90%", "100%"][i] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-row justify-between gap-[15px] overflow-x-auto">
              {/* GOOD */}
              <div className="flex flex-1 flex-col gap-3 px-2 py-3">
                <div className="rounded-lg border border-blue-800-primary px-3 py-1 text-center text-caption1 text-blue-800-primary">
                  GOOD
                </div>
                <ul className="mx-2 space-y-[2px] text-body2 text-black">
                  <li>1. 주차 공간 편리</li>
                  <li>2. 역과 가까워 교통이 편리</li>
                  <li>3. 가성비가 좋음</li>
                </ul>
              </div>

              {/* BAD */}
              <div className="flex flex-1 flex-col gap-3 px-2 py-3">
                <div className="rounded-lg border border-blue-800-primary px-3 py-1 text-center text-caption1 text-blue-800-primary">
                  BAD
                </div>
                <ul className="mx-2 space-y-[2px] text-body2 text-black">
                  <li>1. 관리비가 높아 부담</li>
                  <li>2. 주변 상가로 인한 소음</li>
                  <li>3. 방구조가 좁고 불편</li>
                </ul>
              </div>
            </div>

            <EnvironmentTabs />
          </div>
        </div>

        <ReviewList propertyId={propertyId} />
      </div>

      {/* 하단 버튼 */}
      <div className="sticky bottom-0 left-0 w-full bg-white px-5 py-3">
        <Button
          variant="default"
          className="w-full"
          onClick={() => router.push("/property/${id}/review/new")}
        >
          리뷰 작성하기
        </Button>
      </div>
    </div>
  );
};

export default ReviewPage;
