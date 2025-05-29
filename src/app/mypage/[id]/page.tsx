import PropertyCard from "@/components/common/PropertyCard";

export default function MyPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen p-8 bg-black">
      <h1 className="mb-8 text-2xl font-bold">마이페이지입니다</h1>
      <div className="flex w-[375px] h-[116px]">
        <PropertyCard
          number={1}
          imageUrl="/imgs/-.png"
          title="전세 5억 3,000"
          address="방배마에스트로{주상복합}"
          detailAddress="101동 703호"
          buildingInfo="아파트, 34.5㎡"
          tags={["풀옵션", "xx역 도보 n분", "대학교 인접"]}
          like={true}
        />
      </div>
    </div>
  );
} 