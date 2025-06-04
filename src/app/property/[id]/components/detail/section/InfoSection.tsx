import Image from "next/image";

export default function InfoSection() {
  return (
    <section id="info" className="mb-2 scroll-mt-[80px] bg-white px-5 py-8">
      <div className="mb-5 text-title2 text-black">매물정보</div>
      <Image src="" alt="매물정보 사진" className="mb-5" />
      <div className="grid grid-cols-[auto_1fr] gap-x-[45px] gap-y-[20px] border-b-[1px] border-b-gray-200 pb-8 text-subtitle3 text-black">
        <div>전용/공급면적</div>
        <div>34.59m²/52.03m²</div>

        <div>건축물 용도</div>
        <div>공동주택</div>

        <div>아파트 명</div>
        <div>방배마에스트로(주상복합)</div>

        <div>동</div>
        <div>1동</div>

        <div>해당층/전체층</div>
        <div>저층/27층</div>

        <div>방/욕실 수</div>
        <div>2개/1개</div>

        <div>방거실형태</div>
        <div>분리형</div>

        <div>주실기준/방향</div>
        <div>거실/북향</div>

        <div>현관유형</div>
        <div>계단식</div>

        <div>총세대수</div>
        <div>118세대</div>

        <div>총주차대수</div>
        <div>78대(세대당 0.66대)</div>

        <div>주차</div>
        <div>가능</div>

        <div>사용승인일</div>
        <div>2019.01.21</div>
      </div>

      <div className="mb-5 mt-8 text-subtitle1 text-black">시설정보</div>
      <div className="grid grid-cols-[auto_1fr] gap-x-[76px] gap-y-[20px] border-b-[1px] border-b-gray-200 pb-8 text-subtitle3 text-black">
        <div>난방 방식</div>
        <div>개별난방</div>

        <div>냉방시설</div>
        <div>천장에어컨</div>

        <div>생활시설</div>
        <div>없음</div>
      </div>

      <div className="mb-5 mt-8 text-subtitle1 text-black">추가옵션</div>
    </section>
  );
}
