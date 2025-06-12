import Image from "next/image";
import React from "react";
import { forwardRef } from "react";

const InfoSection = forwardRef<HTMLElement>((_, ref) => {
  const infoList = [
    ["전용/공급면적", "34.59m²/52.03m²"],
    ["건축물 용도", "공동주택"],
    ["아파트 명", "방배마에스트로(주상복합)"],
    ["동", "1동"],
    ["해당층/전체층", "저층/27층"],
    ["방/욕실 수", "2개/1개"],
    ["방거실형태", "분리형"],
    ["주실기준/방향", "거실/북향"],
    ["현관유형", "계단식"],
    ["총세대수", "118세대"],
    ["총주차대수", "78대(세대당 0.66대)"],
    ["주차", "가능"],
    ["사용승인일", "2019.01.21"],
  ];

  return (
    <section
      ref={ref}
      id="info"
      className="mb-2 min-h-[200px] scroll-mt-[174px] bg-white px-5 py-8"
    >
      <div className="mb-5 text-title2 text-black">매물정보</div>
      {/* <Image src="" alt="매물정보 사진" className="mb-5" /> */}
      <div className="mb-5 h-[200px] w-full rounded-small bg-gray-500"></div>
      <div className="grid grid-cols-[auto_1fr] gap-x-[45px] gap-y-[20px] text-caption2 text-black">
        {infoList.map(([label, value], idx) => (
          <React.Fragment key={idx}>
            <div>{label}</div>
            <div>{value}</div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
});

export default InfoSection;
