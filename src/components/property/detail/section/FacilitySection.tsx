"use client";

import React, { forwardRef } from "react";
import { useFacilitiesQuery } from "@/queries/property/detail/useFacilitiesQuery";

const FacilitySection = forwardRef<HTMLElement, { propertyId: number }>(({ propertyId }, ref) => {
  const { data, isLoading, error } = useFacilitiesQuery(propertyId);

  if (isLoading)
    return (
      <section ref={ref} id="facility" className="px-5 py-8">
        로딩 중...
      </section>
    );
  if (error || !data)
    return (
      <section ref={ref} id="facility" className="px-5 py-8">
        에러 발생
      </section>
    );

  const facilityData = {
    냉방시설: data.heatMethodTypeName,
    옵션: data.lifeFacilities,
    보안시설: data.securityFacilities,
    기타시설: data.etcFacilities,
  };

  return (
    <section
      ref={ref}
      id="facility"
      className="mb-2 min-h-[200px] scroll-mt-[174px] bg-white px-5 py-8"
    >
      <div className="mb-5 text-title2 text-black">시설정보</div>
      <div className="grid grid-cols-[auto_1fr] gap-x-[76px] gap-y-[20px] text-black">
        {Object.entries(facilityData).map(([label, value]) => (
          <React.Fragment key={label}>
            <div className="text-caption2">{label}</div>
            <div className="flex flex-col gap-1 text-body2">
              {Array.isArray(value) ? (
                value.map((item, i) => <div key={i}>{item}</div>)
              ) : (
                <div>{value}</div>
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
});

export default FacilitySection;
