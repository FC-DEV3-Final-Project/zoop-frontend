"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import InfoBox from "@/components/property/detail/InfoBox";
import ScrollableTabBar from "@/components/property/detail/ScrollableTabBar";
import SectionList from "@/components/property/detail/SectionList";
import { Header } from "@/layout/Header";

const PropertyDetailPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const router = useRouter();

  return (
    <>
      <Header>
        <Header.Prev onPrevClick={() => router.back()} />
        <Header.Title>방배</Header.Title>
      </Header>
      <div className="flex flex-col gap-2">
        <InfoBox itemId={Number(id)} />
        <ScrollableTabBar />
        <SectionList />
      </div>
    </>
  );
};

export default PropertyDetailPage;
