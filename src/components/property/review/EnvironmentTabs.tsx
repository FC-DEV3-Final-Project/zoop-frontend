"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useReviewSummaryQuery } from "@/queries/property/review/useReviewSummaryQuery";

const EnvironmentTabs = ({ propertyId }: { propertyId: number }) => {
  const { data, isLoading } = useReviewSummaryQuery(propertyId);
  // loading 및 데이터 없는 경우 디자인은 수정 예정 (임시)
  if (isLoading || !data) {
    return (
      <div className="px-5 py-4 text-body2 text-gray-600">
        리뷰 요약 정보를 불러오는 중입니다...
      </div>
    );
  }

  const tabs = [
    {
      name: "교통 환경",
      value: "transport",
      content: data.tra,
    },
    {
      name: "학군",
      value: "school",
      content: data.edu,
    },
    {
      name: "주변 시설",
      value: "facility",
      content: data.loc,
    },
    {
      name: "의료 시설",
      value: "hospital",
      content: data.hel,
    },
  ];

  return (
    <Tabs defaultValue="transport" className="w-full">
      <TabsList className="z-5 relative flex w-full justify-start gap-0 bg-white p-0">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className={`data-[state=active]:z-5 -mb-px rounded-t-[10px] border border-b-blue-800-primary bg-blue-050-bg px-4 py-2 text-subtitle4 text-blue-800-primary data-[state=active]:relative data-[state=inactive]:border-x-0 data-[state=active]:border-b-0 data-[state=inactive]:border-t-0 data-[state=active]:border-x-blue-800-primary data-[state=active]:border-t-blue-800-primary data-[state=active]:bg-white data-[state=active]:text-blue-800-primary data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:h-[1px] data-[state=active]:after:w-full data-[state=active]:after:bg-white data-[state=active]:after:content-['']`}
          >
            {tab.name}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent
          key={tab.value}
          value={tab.value}
          className="z-0 rounded-b-[10px] border border-t-0 border-blue-800-primary bg-white px-4 py-5 text-body2 text-black"
        >
          <ul className="list-disc space-y-2 pl-4">
            {tab.content.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default EnvironmentTabs;
