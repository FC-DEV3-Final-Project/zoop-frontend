"use client";

import { use } from "react";
import InfoBox from "./detail/InfoBox";
import ScrollableTabBar from "./detail/components/ScrollableTabBar";
import SectionList from "./detail/SectionList";

export default function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  return (
    <div className="flex flex-col gap-2">
      <InfoBox itemId={Number(id)} />
      <ScrollableTabBar />
      <SectionList />
    </div>
  );
}
