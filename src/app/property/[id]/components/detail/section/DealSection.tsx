export default function DealSection() {
  return (
    <section id="deal" className="mb-2 scroll-mt-[80px] bg-white px-8 py-5">
      <div className="mb-5 text-title2 text-black">거래정보</div>
      <div className="grid grid-cols-[auto_1fr] gap-x-[63px] gap-y-[20px] text-subtitle3 text-black">
        <div>거래방식</div>
        <div>전세 5억 3,000만원</div>

        <div>관리비</div>
        <div>18만원</div>

        <div>융자금</div>
        <div>융자금 없음</div>

        <div>입주가능일</div>
        <div>2025. 06. 중순</div>
      </div>
    </section>
  );
}
