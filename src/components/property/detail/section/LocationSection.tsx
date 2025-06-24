"use client";

import { forwardRef, useEffect } from "react";
import { useLocationQuery } from "@/queries/property/detail/useLocationQuery";

declare global {
  interface Window {
    kakao: any;
  }
}

const LocationSection = forwardRef<HTMLElement, { propertyId: number }>(({ propertyId }, ref) => {
  const { data, isLoading, error } = useLocationQuery(propertyId);

  useEffect(() => {
    if (!data || !window.kakao?.maps?.load) return;

    window.kakao.maps.load(() => {
      const container = document.getElementById("staticMap");
      if (!container) return;

      const position = new window.kakao.maps.LatLng(data.latitude, data.longitude);
      const marker = { position };
      const staticMapOption = {
        center: position,
        level: 3,
        marker,
      };

      new window.kakao.maps.StaticMap(container, staticMapOption);
    });
  }, [data]);

  if (isLoading || error || !data) return null;

  return (
    <section
      ref={ref}
      id="location"
      className="mb-2 min-h-[200px] scroll-mt-[174px] bg-white px-5 py-8"
    >
      <div className="mb-5 text-title2 text-black">위치정보</div>
      <div className="mb-4 text-body2 text-black">{data.exposureAddress}</div>
      <div id="staticMap" className="h-[210px] w-full rounded-small" />
    </section>
  );
});

LocationSection.displayName = "LocationSection";

export default LocationSection;
