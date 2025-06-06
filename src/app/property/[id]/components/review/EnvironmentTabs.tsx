"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const tabs = [
  {
    name: "교통 환경",
    value: "transport",
    content: [
      "대중교통 접근성이 뛰어나며, 도보 5분 거리에 지하철역이 있어 출퇴근이 편리합니다.",
      "버스 노선도 다양해 강남, 시청 등 주요 지역으로 이동이 용이합니다.",
      "단점이라면 출퇴근 시간대에는 도로 정체가 자주 발생하는 편입니다.",
    ],
  },
  {
    name: "주거 환경",
    value: "residence",
    content: ["주거 환경 관련 설명입니다."],
  },
  {
    name: "학군",
    value: "school",
    content: ["학군 정보입니다."],
  },
  {
    name: "주변 시설",
    value: "facility",
    content: ["주변 시설 정보입니다."],
  },
];

export default function EnvironmentTabs() {
  return (
    <Tabs defaultValue="transport" className="w-full">
      <TabsList className="relative z-10 flex w-full justify-start gap-0 bg-white p-0">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className={`-mb-px rounded-t-[10px] border border-b-blue-800-primary bg-blue-050-bg px-4 py-2 text-subtitle4 text-blue-800-primary data-[state=active]:relative data-[state=active]:z-20 data-[state=inactive]:border-x-0 data-[state=active]:border-b-0 data-[state=inactive]:border-t-0 data-[state=active]:border-x-blue-800-primary data-[state=active]:border-t-blue-800-primary data-[state=active]:bg-white data-[state=active]:text-blue-800-primary data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:h-[1px] data-[state=active]:after:w-full data-[state=active]:after:bg-white data-[state=active]:after:content-['']`}
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
}
