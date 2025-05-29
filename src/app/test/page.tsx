import PropertyCard from "@/components/common/PropertyCard";

export default function Test() {
  return (
    <>
      <div>
        <PropertyCard
          itemId={1}
          itemNumber={1}
          imageUrl="/imgs/-.png"
          transactionType="전세"
          price="5억 3,000"
          address="방배마에스트로{주상복합}"
          detailAddress="101동 703호"
          buildingType="아파트"
          area="34.5㎡"
          tags={["풀옵션", "xx역 도보 n분", "대학교 인접"]}
          liked={false}
        />
        <PropertyCard
          itemId={2}
          itemNumber={2}
          imageUrl="/imgs/-.png"
          transactionType="전세"
          price="5억 3,000"
          address="방배마에스트로{주상복합}"
          detailAddress="101동 703호"
          buildingType="아파트"
          area="34.5㎡"
          tags={["풀옵션", "xx역 도보 n분", "대학교 인접"]}
          liked={true}
          small={true}
        />
      </div>

      <div className="flex min-h-screen flex-col items-center justify-center gap-1 p-8">
        <p className="text-largeTitle">Large Title 텍스트</p>
        <p className="text-title1">Title 1 텍스트</p>
        <p className="text-title2">Title 2 텍스트</p>
        <p className="text-title3">Title 3 텍스트</p>
        <p className="text-title4">Title 4 텍스트</p>
        <p className="text-subtitle1">Subtitle 1 텍스트</p>
        <p className="text-subtitle2">Subtitle 2 텍스트</p>
        <p className="text-subtitle3">Subtitle 3 텍스트</p>
        <p className="text-subtitle4">Subtitle 4 텍스트</p>
        <p className="text-body1">Body 1 텍스트</p>
        <p className="text-body2">Body 2 텍스트</p>
        <p className="text-body3">Body 3 텍스트</p>
        <p className="text-caption1">Caption 1 텍스트</p>
        <p className="text-caption2">Caption 2 텍스트</p>
        <p className="text-caption3">Caption 3 텍스트</p>
        <p className="text-footnote">Footnote 텍스트</p>
      </div>
    </>
  );
}
