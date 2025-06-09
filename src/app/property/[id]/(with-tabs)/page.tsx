"use client";

import { use } from "react";
import InfoBox from "@/components/property/detail/InfoBox";
import ScrollableTabBar from "@/components/property/detail/ScrollableTabBar";
import SectionList from "@/components/property/detail/SectionList";

const PropertyDetailPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);

  return (
    <div className="flex flex-col gap-2">
      <InfoBox itemId={Number(id)} />
      <ScrollableTabBar />
      <SectionList />
    </div>
  );
};

export default PropertyDetailPage;
