import PropertyCard from "@/components/common/PropertyCard";

export default function MyPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex w-[395px] justify-center bg-blue-500">
    <div className="w-[375px] min-h-screen bg-black">
      <h1 className="mb-8 text-2xl font-bold">마이페이지입니다</h1>
      <div className="w-[375px] h-[116px]">
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
          liked={true}
        />
        <PropertyCard
          itemId={2}
          itemNumber={1}
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
      </div>
    </div>
  );
}
