"use client";

import { use } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";
import { Tab } from "@/components/Tab";
import ImageCarousel from "../components/ImageCarousel";

const TAB_OPTIONS = [
  { label: "상세 정보", value: "detail" },
  { label: "리뷰", value: "review" },
];

export default function PropertyLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const pathname = usePathname();

  const selectedTab = pathname.includes("/review") ? "review" : "detail";

  const handleTabChange = (tab: string) => {
    if (tab === "review") {
      router.push(`/property/${id}/review`);
    } else {
      router.push(`/property/${id}`);
    }
  };

  return (
    <>
      {selectedTab === "detail" && <ImageCarousel />}
      <Tab tabOptions={TAB_OPTIONS} selected={selectedTab} onChange={handleTabChange} />
      <div>{children}</div>
    </>
  );
}
