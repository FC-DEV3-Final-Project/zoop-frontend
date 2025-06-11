import { forwardRef } from "react";

const LocationSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id="location" className="mb-2 scroll-mt-[174px] bg-white px-5 py-8">
      <div className="mb-5 text-title2 text-black">위치정보</div>
      <div className="mb-4 text-caption2 text-black">서울특별시 서초구 방배동</div>
      {/* 지도는 우선 bg color 준 div로 대첼합니다 */}
      <div className="h-[210px] w-full rounded-small bg-gray-500"></div>
    </section>
  );
});

export default LocationSection;
