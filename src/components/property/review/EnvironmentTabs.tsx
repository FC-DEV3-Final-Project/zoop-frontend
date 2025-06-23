"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface TabData {
  name: string;
  value: string;
  content: string[];
}

interface EnvironmentTabsProps {
  tabs: TabData[];
  isLoading: boolean;
}

const EnvironmentTabs = ({ tabs, isLoading }: EnvironmentTabsProps) => {
  if (isLoading) {
    return (
      <div className="space-y-2">
        <div className="h-5 w-1/3 animate-pulse rounded bg-gray-200" />
        <div className="h-5 w-1/2 animate-pulse rounded bg-gray-200" />
        <div className="h-5 w-1/4 animate-pulse rounded bg-gray-200" />
      </div>
    );
  }

  if (!tabs.length) {
    return <div className="text-body2 text-gray-500">아직 AI 기반 환경 요약 리뷰가 없습니다.</div>;
  }

  return (
    <Tabs defaultValue={tabs[0].value} className="w-full">
      <TabsList className="z-5 relative flex w-full justify-start gap-0 bg-white p-0">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="data-[state=active]:z-5 -mb-px rounded-t-[10px] border border-b-blue-800-primary bg-blue-050-bg px-4 py-2 text-subtitle4 text-blue-800-primary data-[state=active]:relative data-[state=inactive]:border-x-0 data-[state=active]:border-b-0 data-[state=inactive]:border-t-0 data-[state=active]:border-x-blue-800-primary data-[state=active]:border-t-blue-800-primary data-[state=active]:bg-white data-[state=active]:text-blue-800-primary data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:h-[1px] data-[state=active]:after:w-full data-[state=active]:after:bg-white data-[state=active]:after:content-['']"
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
