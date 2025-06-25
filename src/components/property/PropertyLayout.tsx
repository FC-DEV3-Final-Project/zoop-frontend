"use client";

import { useState, useEffect, ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import Tab from "@/components/common/Tab";
import ImageCarousel from "@/components/property/ImageCarousel";
import { fetchBasicInfo } from "@/apis/property/detail/fetchBasicInfo";
import { BasicInfoProps } from "@/types/propertyDetail";
import NotFoundProperty from "@/components/property/detail/NotFoundProperty";
import SkeletonInfoBox from "@/components/property/detail/SkeletonInfoBox";

const TAB_OPTIONS = [
  { label: "상세 정보", value: "detail" },
  { label: "리뷰", value: "review" },
];

const scrollToTopSmooth = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const delay = isMobile ? 150 : 50;

  requestAnimationFrame(() => {
    setTimeout(() => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }, delay);
  });
};

const PropertyLayout = ({ id, children }: { id: string; children: ReactNode }) => {
  const propertyId = Number(id);
  const router = useRouter();
  const pathname = usePathname();
  const selectedTab = pathname.includes("/review") ? "review" : "detail";

  const [propertyInfo, setPropertyInfo] = useState<BasicInfoProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleTabChange = (tab: string) => {
    const targetPath = tab === "review" ? `/property/${id}/review` : `/property/${id}`;
    router.push(targetPath, { scroll: false });
    scrollToTopSmooth();
  };

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetchBasicInfo(propertyId)
      .then((data) => {
        setPropertyInfo(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, [propertyId]);

  useEffect(() => {
    if (pathname.includes("/property")) {
      scrollToTopSmooth();
    }
  }, [pathname]);

  if (loading) {
    return <SkeletonInfoBox />;
  }

  if (error || !propertyInfo) {
    return <NotFoundProperty />;
  }

  return (
    <div className="pt-12">
      <ImageCarousel propertyInfo={propertyInfo} />
      <div className="sticky top-12 z-10 bg-white">
        <Tab tabOptions={TAB_OPTIONS} selected={selectedTab} onChange={handleTabChange} />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default PropertyLayout;
