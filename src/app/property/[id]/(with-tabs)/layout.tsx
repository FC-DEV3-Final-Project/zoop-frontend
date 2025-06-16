"use client";

import { useEffect, useState } from "react";
import { use } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";
import Tab from "@/components/common/Tab";
import ImageCarousel from "@/components/property/ImageCarousel";
import { fetchBasicInfo, BasicInfo } from "@/apis/property/detail/fetchBasicInfo";

const TAB_OPTIONS = [
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

  const [propertyInfo, setPropertyInfo] = useState<BasicInfo | null>(null);

  const handleTabChange = (tab: string) => {
    const targetPath = tab === "review" ? `/property/${id}/review` : `/property/${id}`;
    router.push(targetPath, { scroll: false });

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  };

  useEffect(() => {
    fetchBasicInfo(Number(id))
      .then(setPropertyInfo)
      .catch((err) => console.error(err));
  }, [id]);

  if (!propertyInfo) return null;

  return (
    <div className="pt-16">
      <ImageCarousel propertyInfo={propertyInfo} />
      <div className="sticky top-16 z-10 bg-white">
        <Tab tabOptions={TAB_OPTIONS} selected={selectedTab} onChange={handleTabChange} />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default PropertyLayout;
