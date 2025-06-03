"use client";
import { useState } from "react";
import { Tab } from "@/components/Tab";
import PropertyCard from "@/components/common/PropertyCard";
import ReviewItem from "@/components/ReviewItem";

export default function MyPage({ params }: { params: { id: string } }) {
  const [selectedTab, setSelectedTab] = useState("liked");

  // 임시 데이터
  const userData = {
    profileImage: "/imgs/default-profile.png",
    name: "지윤",
    reviews: [
      {
        content: "교통이 너무 편함 단, 출퇴근시 사람들 엄청 몰리기 때문에 일찍 나가야 함.",
        likes: 3,
        comments: 5,
      },
      {
        content: "아이들 학교가 가까워서 좋아요. 교통도 편리해서 좋아요",
        likes: 2,
        comments: 3,
      },
    ],
  };

  const likedProperties = [
    {
      id: 1,
      imageUrl: "/imgs/propertyExample.png",
      transactionType: "전세",
      price: "5억 3,000",
      buildingType: "주상복합",
      area: "34.5㎡",
      address: "방배마에스트로",
      detailAddress: "1동 703호",
      tags: ["풀옵션", "xx역 도보 n분", "대학교 인접"],
    },
    {
      id: 2,
      imageUrl: "/imgs/propertyExample.png",
      transactionType: "전세",
      price: "2억 7,500",
      buildingType: "주상복합",
      area: "38.67㎡",
      address: "방배마에스트로",
      detailAddress: "201동 1103호",
      tags: ["헬스장 근처", "카페많음", "대학교 인접"],
    },
  ];

  const recentProperties = [
    {
      id: 3,
      imageUrl: "/imgs/propertyExample.png",
      transactionType: "월세",
      price: "1억 5,000",
      buildingType: "아파트",
      area: "59.8㎡",
      address: "래미안아파트",
      detailAddress: "105동 1203호",
      tags: ["풀옵션", "xx역 도보 5분", "공원근처"],
    },
    {
      id: 4,
      imageUrl: "/imgs/propertyExample.png",
      transactionType: "전세",
      price: "3억 2,000",
      buildingType: "아파트",
      area: "84.5㎡",
      address: "자이아파트",
      detailAddress: "203동 504호",
      tags: ["풀옵션", "xx역 도보 3분", "학교근처"],
    },
  ];

  const tabOptions = [
    { label: "찜한 매물", value: "liked" },
    { label: "최근 본 매물", value: "recent" },
  ];
  const currentProperties = selectedTab === "liked" ? likedProperties : recentProperties;

  const handleEdit = () => {
    alert("내 정보 수정 클릭!");
  };
  const handleMoreReviews = () => {
    alert("리뷰 더보기 클릭!");
  };

  return (
    <div className="flex flex-col gap-6 pb-6 pt-7">
      {/* 유저 정보 */}
      <div className="mx-auto flex w-full max-w-[320px] items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 overflow-hidden rounded-full border border-neutral-200 bg-neutral-100">
            <img src={userData.profileImage} alt="프로필" className="h-full w-full object-cover" />
          </div>
          <span className="text-base font-semibold text-black">{userData.name}</span>
        </div>
        <button
          onClick={handleEdit}
          className="rounded bg-neutral-100 px-3 py-1 text-sm text-black"
        >
          내 정보 수정
        </button>
      </div>

      {/* 리뷰 박스 */}
      <div className="flex flex-col items-start justify-center gap-3.5 self-stretch rounded-lg bg-white px-5 py-4 shadow outline outline-1 outline-offset-[-1px] outline-neutral-200">
        <div className="inline-flex items-center justify-between self-stretch bg-white">
          <div className="text-base font-bold text-black">나의 리뷰</div>
          <button onClick={handleMoreReviews} className="flex items-center gap-1">
            <div className="text-sm text-neutral-600">더보기</div>
            <div className="relative h-3.5 w-3.5 overflow-hidden">
              <div className="absolute left-[4.81px] top-[2.19px] h-2.5 w-1.5 bg-neutral-600" />
            </div>
          </button>
        </div>
        <div className="flex flex-col items-start self-stretch">
          {userData.reviews.map((review, idx) => (
            <ReviewItem key={idx} {...review} />
          ))}
        </div>
      </div>

      {/* 매물 탭/리스트 */}
      <div>
        <Tab tabOptions={tabOptions} selected={selectedTab} onChange={setSelectedTab} />
        <div className="mt-2 flex flex-col gap-2">
          <div className="flex items-center justify-between rounded bg-white px-5 py-4">
            <span className="text-sm font-bold text-black">{currentProperties.length}건</span>
            <span className="text-sm text-black">의 매물</span>
            <span className="cursor-pointer text-sm text-black">지도에서 보기</span>
          </div>
          {currentProperties.map((property, index) => (
            <PropertyCard
              key={property.id}
              itemId={property.id}
              itemNumber={index + 1}
              imageUrl={property.imageUrl}
              transactionType={property.transactionType}
              price={property.price}
              buildingType={property.buildingType}
              area={property.area}
              address={property.address}
              detailAddress={property.detailAddress}
              tags={property.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
