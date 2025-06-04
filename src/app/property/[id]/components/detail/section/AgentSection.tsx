import { Button } from "@/components/ui/button";

export default function AgentSection() {
  return (
    <section id="agent" className="mb-[75px] scroll-mt-[80px] bg-white px-5 py-8">
      <div className="mb-5 text-title2 text-black">중개정보</div>
      <div className="mb-5 text-subtitle1 text-black">일등 부동산 공인중개사사무소</div>

      <div className="flex flex-col gap-1 text-body2 text-black">
        <div>
          대표 <span className="text-subtitle4">김정순</span> 등록번호 ⌄
        </div>
        <div>경기도 수원시 장안구 경수대로 1083 1층</div>
        <div>
          전화 <span className="text-subtitle4">031-271-5309</span>,{" "}
          <span className="text-subtitle4">010-8711-6151</span>
        </div>
        <div>
          최근 3개월 집주인확인 <span className="text-subtitle4">169건</span>
        </div>
      </div>

      <div className="border-b-[1px] border-b-gray-200 pb-4">
        <span></span>
      </div>
      <div className="mb-5 mt-4 text-subtitle1">중개보수 및 세금정보</div>
      {/* 중개보수 */}
      <div className="grid grid-cols-[70px_1fr] gap-x-[18px]">
        <div className="text-body2">중개보수</div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span>최대 204만원(VAT 별도) › </span>
          </div>
          <div>상한요율 0.4%</div>
          <div>약 561만원</div>
        </div>
      </div>

      {/* 취득세 */}
      <div className="mt-4 grid grid-cols-[70px_1fr] gap-x-[18px]">
        <div className="text-body2">취득세</div>
        <div className="flex flex-col gap-2">
          <div>취득세 510만원</div>
          <div>지방교육세 51만원</div>
          <div>농어촌특별세 -원</div>
        </div>
      </div>

      {/* 안내 문구 */}
      <p className="mt-4 text-footnote text-black">
        중개보수 및 세금 정보는 실제 적용되는 금액과 다를 수 있습니다.
      </p>
      <div className="mt-4">
        <Button variant="default" disabled>
          해당 부동산의 다른 매물 보러가기
        </Button>
      </div>
    </section>
  );
}
