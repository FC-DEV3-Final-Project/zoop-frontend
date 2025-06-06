export default function LocationSection() {
  const nearbySchools = ["서문여자중학교(533m)", "이수중학교(533m)", "서문여자고등학교(533m)"];

  return (
    <section id="location" className="mb-2 scroll-mt-[80px] bg-white px-5 py-8">
      <div className="mb-5 text-title2 text-black">위치정보</div>
      <div className="mb-4 text-subtitle3 text-black">서울특별시 서초구 방배동</div>
      {/* 지도는 우선 bg color 준 div로 대첼합니다 */}
      <div className="h-[210px] w-full rounded-small bg-gray-500"></div>
      <div className="mb-2 mt-5 text-subtitle1 text-black">주변 학교</div>
      <div className="-mx-4 overflow-x-auto px-4">
        <div className="flex flex-wrap gap-[8px]">
          {nearbySchools.map((school, idx) => (
            <span
              key={idx}
              className="justify-center whitespace-nowrap rounded-[50px] bg-gray-200 px-2 py-1 align-middle"
            >
              {school}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
