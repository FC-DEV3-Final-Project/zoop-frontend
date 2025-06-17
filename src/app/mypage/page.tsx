"use client";
import { useRouter } from "next/navigation";
import { Header } from "@/layout/Header";
import { useEffect, useState } from "react";
import UserProfile from "@/components/mypage/UserProfile";
import PostPreviewBox from "@/components/mypage/PostPreviewBox";
import PropertyListSection from "@/components/common/PropertyListSection";
import { useInfiniteScroll } from "@/hooks/common/useInfiniteScroll";
import { PropertyCardProps } from "@/components/common/PropertyCard";
import { fetchMypageHome, MyPageHomeResponse } from "@/apis/mypage/fetchMypageHome";

const MyPage = () => {
  const router = useRouter();

  const [homeData, setHomeData] = useState<MyPageHomeResponse["data"] | null>(null);
  const [homeLoading, setHomeLoading] = useState(true);

  const PAGE_SIZE = 2;

  // 1. 초기 데이터 (home API)
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const homeData = await fetchMypageHome();
        setHomeData({
          profile: homeData.data.profile,
          myReviews: homeData.data.myReviews,
          activity: {
            bookmarkedPropertyCount: homeData.data.activity.bookmarkedPropertyCount,
            recentViewedPropertyCount: homeData.data.activity.recentViewedPropertyCount,
          },
          bookmarkedProperties: homeData.data.bookmarkedProperties,
          recentViewedProperties: homeData.data.recentViewedProperties,
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
    if (!homeData?.activity?.bookmarkedPropertyCount || homeData.activity.bookmarkedPropertyCount < PAGE_SIZE) {
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
    homeData?.bookmarkedProperties,
  ]);

  // 최종 리스트 (초기 데이터 + 추가 데이터)
  const bookmarkedItems = [...(homeData?.bookmarkedProperties || []), ...additionalItems];

  const tabOptions = [
    { label: "찜한 매물", value: "bookmarked" },
    { label: "최근 본 매물", value: "recentViewed" },
  ];

  const handleEdit = () => {
    router.push(`/mypage/user-info`);
  };
  const handleMorePosts = () => {
    router.push(`/mypage/posts`);
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
              {homeData?.profile && <UserProfile profile={homeData.profile} onEdit={handleEdit} />}
              {/* 포스트 박스 */}
              <PostPreviewBox posts={homeData?.myReviews || []} onMorePosts={handleMorePosts} />
            </section>

            {/* 하단: 탭바 + 리스트 */}
            <PropertyListSection
              tabOptions={tabOptions}
              isNumberVisible={false}
              propertyCount={{
                bookmarked: homeData?.activity.bookmarkedPropertyCount || 0,
                recentViewed: homeData?.activity.recentViewedPropertyCount || 0,
              }}
              propertyMap={{
                bookmarked: bookmarkedItems as PropertyCardProps[],
                recentViewed:
                  (homeData?.recentViewedProperties as PropertyCardProps[]) || [],
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
