import Image from "next/image";
import React from "react";

export default function InfoSection() {
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

  const facilityList = [
    ["난방 방식", "개별난방"],
    ["냉방시설", "천장에어컨"],
    ["생활시설", "없음"],
  ];

  const optionList = [
    { icon: "/icons/house-new.svg", label: "신축" },
    { icon: "/icons/elevator.svg", label: "엘리베이터" },
    { icon: "/icons/money.svg", label: "전세자금대출" },
    { icon: "/icons/pet.svg", label: "반려동물 가능" },
    { icon: "/icons/park.svg", label: "공원 근처" },
    { icon: "/icons/school.svg", label: "학군" },
  ];

  return (
    <section id="info" className="mb-2 scroll-mt-[80px] bg-white px-5 py-8">
      <div className="mb-5 text-title2 text-black">매물정보</div>
      {/* <Image src="" alt="매물정보 사진" className="mb-5" /> */}
      <div className="mb-5 h-[200px] w-full rounded-small bg-gray-500"></div>
      <div className="grid grid-cols-[auto_1fr] gap-x-[45px] gap-y-[20px] pb-8 text-subtitle3 text-black">
        {infoList.map(([label, value], idx) => (
          <React.Fragment key={idx}>
            <div>{label}</div>
            <div>{value}</div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
