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
    {
      id: 3,
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
      id: 4,
      imageUrl: "/imgs/propertyExample.png",
      transactionType: "전세",
      price: "2억 7,500",
      buildingType: "주상복합",
      area: "38.67㎡",
      address: "방배마에스트로",
      detailAddress: "201동 1103호",
      tags: ["헬스장 근처", "카페많음", "대학교 인접"],
    },
    {
      id: 5,
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
      id: 6,
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
    <div className="flex h-screen flex-col">
      {/* 상단: 프로필/리뷰 */}
      <section className="flex inline-flex flex-col items-start justify-start gap-6 bg-white px-5 pb-6 pt-7">
        {/* 유저 정보 */}
        <div className="flex inline-flex w-full items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 overflow-hidden rounded-full border border-neutral-200 bg-neutral-100">
              <img
                src={userData.profileImage}
                alt="프로필"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-subtitle2">{userData.name}</span>
          </div>
          <button
            onClick={handleEdit}
            className="rounded bg-neutral-100 px-3 py-1 text-body2"
          >
            내 정보 수정
          </button>
        </div>

        {/* 리뷰 박스 */}
        <div className="shadow3 flex flex-col items-start justify-center gap-3.5 self-stretch rounded-lg bg-white px-5 py-4 outline outline-1 outline-offset-[-1px] outline-neutral-200">
          <div className="inline-flex items-center justify-between self-stretch bg-white">
            <div className="text-title4">나의 리뷰</div>
            <button onClick={handleMoreReviews} className="flex items-center gap-1">
              <div className="text-body2 text-neutral-600">더보기</div>
              <img src="/icons/arrow-right.svg" alt="더보기" className="h-4 w-4" />
            </button>
          </div>
          <div className="flex flex-col items-start self-stretch">
            {userData.reviews.length > 0 ? (
              userData.reviews.map((review, idx) => <ReviewItem key={idx} {...review} />)
            ) : (
              <div className="h-5 justify-center self-stretch text-body2 leading-tight">
                내가 작성한 리뷰가 없어요
              </div>
            )}
          </div>
        </div>
      </section>
      {/* 하단: 탭바 + 리스트 */}
      <section className="flex flex-col">
        {/* 스크롤시 탭바 + 매물 헤더 상단 고정 */}
        <div className="sticky top-16 z-10 bg-white">
          <Tab tabOptions={tabOptions} selected={selectedTab} onChange={setSelectedTab} />
          <div className="flex items-center justify-between rounded bg-white px-5 py-4">
            <div className="justify-center">
              <span className="text-subtitle4">{currentProperties.length}건</span>
              <span className="text-body2">의 매물</span>
            </div>
            <div className="flex items-center justify-start gap-1">
              <img src="/icons/map.svg" alt="더보기" className="h-4 w-4" />
              <span className="cursor-pointer text-body2">지도에서 보기</span>
            </div>
          </div>
        </div>
        {/* 매물 리스트만 스크롤 */}
        <div className="overflow-y-auto">
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
      </section>
    </div>
  );
}
