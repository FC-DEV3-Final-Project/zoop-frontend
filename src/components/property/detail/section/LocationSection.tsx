"use client";

import { forwardRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchLocation } from "@/apis/property/detail/fetchLocation";

const LocationSection = forwardRef<HTMLElement, { propertyId: number }>(({ propertyId }, ref) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["location", propertyId],
    queryFn: () => fetchLocation(propertyId),
  });

  if (isLoading || error || !data) return null;

  return (
    <section
      ref={ref}
      id="location"
      className="mb-2 min-h-[200px] scroll-mt-[174px] bg-white px-5 py-8"
    >
      <div className="mb-5 text-title2 text-black">위치정보</div>
      <div className="mb-4 text-body2 text-black">{data.exposureAddress}</div>
      {/* TODO: Kakao static map으로 대체 */}
      <div className="h-[210px] w-full rounded-small bg-gray-500"></div>
    </section>
  );
});

export default LocationSection;
