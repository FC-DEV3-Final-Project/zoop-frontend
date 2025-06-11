"use client";

import { use } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";
import Tab from "@/components/common/Tab";
import ImageCarousel from "@/components/property/ImageCarousel";

const tab_options = [
  { label: "상세 정보", value: "detail" },
  { label: "리뷰", value: "review" },
];

const PropertyLayout = ({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ id: string }>;
}) => {
  const { id } = use(params);
  const router = useRouter();
  const pathname = usePathname();

  const selectedTab = pathname.includes("/review") ? "review" : "detail";

  const handleTabChange = (tab: string) => {
    const targetPath = tab === "review" ? `/property/${id}/review` : `/property/${id}`;
    router.push(targetPath, { scroll: false });

    // 라우팅 이후 스크롤이 급하게 이동하는 것을 방지하기 위해
    // 약간의 딜레이를 주어 스크롤 위치를 부드럽게 조정
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50); // 50ms 가 육안으로는 가장 적당한 거 같아요
  };

  return (
    <div className="pt-16">
      <ImageCarousel />
      <div className="sticky top-16 z-10 bg-white">
        <Tab tabOptions={tab_options} selected={selectedTab} onChange={handleTabChange} />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default PropertyLayout;
