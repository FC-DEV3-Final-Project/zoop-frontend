"use client";

import React from "react";

const FacilitySection = () => {
  const facilityData = {
    냉방시설: "개별난방",
    옵션: ["천장에어컨", "욕조, 샤워부스", "싱크대", "가스레인지", "세탁기", "냉장고"],
    보안시설: ["경비원", "인터폰", "카드키", "CCTV"],
    기타시설: ["화재경보기", "베란다", "엘리베이터"],
  };

  return (
    <section id="facility" className="mb-2 scroll-mt-[80px] bg-white px-5 py-8">
      <div className="mb-5 text-title2 text-black">시설정보</div>
      <div className="grid grid-cols-[auto_1fr] gap-x-[76px] gap-y-[20px] text-caption2 text-black">
        {Object.entries(facilityData).map(([label, value]) => (
          <React.Fragment key={label}>
            <div>{label}</div>
            <div className="flex flex-col gap-1">
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
};

export default FacilitySection;
