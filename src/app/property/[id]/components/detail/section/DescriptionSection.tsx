import { Button } from "@/components/ui/button";

export default function DescriptionSection() {
  return (
    <section id="description" className="mb-2 scroll-mt-[80px] bg-white px-8 py-5">
      <div className="mb-5 text-title2 text-black">상세설명</div>
      <div className="mb-4 text-caption1 text-black">
        [이수역] 방배 마에스트로 주상복합아파트(전세5억3천만원)
      </div>
      <div className="text-body2 text-black">
        서초구 방배동 866-10 (서초대로 13) 방배마에스트로 아파트 - 이수역 도보 1분~2분 거리에 있는
        주상복합 아파트입니다.
      </div>
      {/* 2줄 이상일 때 버튼 표시 되도록 작업 예정, 버튼 디자인 확인 필*/}
      <div className="mt-8">
        <Button variant="default" disabled>
          전체 설명 보기
        </Button>
      </div>
    </section>
  );
}
