"use client";
import { useRouter, useParams } from "next/navigation";
import { Header } from "@/layout/Header";
import { useEffect, useState } from "react";
import UserProfile from "@/components/mypage/UserProfile";
import PostPreview from "@/components/mypage/PostPreview";
import PropertyListSection from "@/components/common/PropertyListSection";
import { useInfiniteScroll } from "@/hooks/common/useInfiniteScroll";
import { PropertyCardProps } from "@/components/common/PropertyCard";

const MyPage = () => {
  const router = useRouter();
  const { id } = useParams();

  // home api 데이터 상태
  const [homeData, setHomeData] = useState<any>(null);
  const [homeLoading, setHomeLoading] = useState(true);

  const PAGE_SIZE = 2;

  // 1. 초기 데이터 (home API)
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const homeResponse = await fetch("/mypage/home");
        const homeData = await homeResponse.json();

        // data 구조분해할당
        const {
          profile,
          myReviews = [],
          activity: { bookmarkedCount = 0, recentViewedCount = 0 } = {},
          bookmarkedProperties = [],
          recentViewedProperties = [],
        } = homeData.data || {};

        setHomeData({
          profile,
          myReviews,
          activity: {
            bookmarkedCount,
            recentViewedCount,
          },
          initialBookmarkedProperties: bookmarkedProperties,
          initialRecentViewedProperties: recentViewedProperties,
        });

        setHomeLoading(false);
      } catch (error) {
        console.error("초기 데이터 로드 실패:", error);
        return null;
      }
    };

    fetchInitialData();
  }, []);

  // 2. 추가 데이터 (bookmark API)
  const fetchBookmarkedItems = async (page: number) => {
    if (!homeData?.activity?.bookmarkedCount || homeData.activity.bookmarkedCount < PAGE_SIZE) {
      return { content: [], hasNext: false };
    }

    await new Promise((resolve) => setTimeout(resolve, 2000)); // 2초 대기
    const res = await fetch(`/mypage/bookmarked-properties?page=${page}`);
    const result = await res.json();
    return {
      content: result.content as PropertyCardProps[],
      hasNext: result.hasNext,
    };
  };

  // 무한 스크롤 훅 사용
  const {
    items: additionalItems,
    loader,
    hasMore,
    loading: bookmarkedLoading,
  } = useInfiniteScroll<PropertyCardProps>(fetchBookmarkedItems, [
    homeData?.initialBookmarkedProperties,
  ]);

  // 최종 리스트 (초기 데이터 + 추가 데이터)
  const bookmarkedItems = [...(homeData?.initialBookmarkedProperties || []), ...additionalItems];

  const tabOptions = [
    { label: "찜한 매물", value: "bookmarked" },
    { label: "최근 본 매물", value: "recentViewed" },
  ];

  const handleEdit = () => {
    router.push(`/mypage/${id}/user-info`);
  };
  const handleMorePosts = () => {
    router.push(`/mypage/${id}/myposts`);
  };

  return (
    <>
      <Header>
        <Header.Prev onPrevClick={() => router.back()} />
        <Header.Title>마이페이지</Header.Title>
        <Header.Alarm onAlarmClick={() => alert("알림 클릭")} />
      </Header>
      <div className="flex h-screen flex-col bg-white pt-16">
        {homeLoading ? (
          <div>로딩중...</div>
        ) : (
          <>
            {/* 상단: 프로필/포스트 */}
            <section className="flex inline-flex flex-col items-start justify-start gap-6 bg-white px-5 pb-6 pt-7">
              {/* 유저 정보 */}
              {homeData.profile && <UserProfile profile={homeData.profile} onEdit={handleEdit} />}
              {/* 포스트 박스 */}
              <PostPreview posts={homeData.myReviews} onMorePosts={handleMorePosts} />
            </section>

            {/* 하단: 탭바 + 리스트 */}
            <PropertyListSection
              tabOptions={tabOptions}
              isNumberVisible={false}
              propertyMap={{
                bookmarked: bookmarkedItems as PropertyCardProps[],
                recentViewed: (homeData?.initialRecentViewedProperties as PropertyCardProps[]) || [],
              }}
              loaders={{
                bookmarked: loader,
              }}
              hasMore={{
                bookmarked: hasMore,
              }}
              loading={{
                bookmarked: bookmarkedLoading,
              }}
            />
          </>
        )}
      </div>
    </>
  );
};

export default MyPage;
