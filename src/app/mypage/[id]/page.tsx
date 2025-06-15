"use client";
import { useRouter, useParams } from "next/navigation";
import { Header } from "@/layout/Header";
import { useEffect, useState } from "react";
import UserProfile from "@/components/mypage/UserProfile";
import PostPreview from "@/components/mypage/PostPreview";
import PropertyListSection from "@/components/common/PropertyListSection";
import { useInfiniteScroll } from "@/hooks/common/useInfiniteScroll";
import { PropertyCardProps } from "@/components/common/PropertyCard";

// 1. 초기 데이터 (home API)
const fetchInitialData = async () => {
  const res = await fetch("/mypage/home");
  const result = await res.json();
  return {
    profile: result.data.profile,
    myReviews: result.data.myReviews,
    initialBookmarkedProperties: result.data.bookmarkedProperties as PropertyCardProps[],
    initialRecentViewedProperties: result.data.recentViewedProperties as PropertyCardProps[],
  };
};

// 2. 추가 데이터 (bookmark API)
const fetchBookmarkedItems = async (page: number) => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // 1초 대기
  const res = await fetch(`/mypage/bookmarked-properties?page=${page}`);
  const result = await res.json();
  return {
    content: result.content as PropertyCardProps[],
    hasNext: result.hasNext,
  };
};

const MyPage = () => {
  const router = useRouter();
  const { id } = useParams();

  // home api 데이터 상태
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // data 구조분해할당
  const {
    profile,
    myReviews = [],
    initialBookmarkedProperties = [],
    initialRecentViewedProperties = [],
  } = data || {};

  // home api 데이터 로드
  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const data = await fetchInitialData();
        setData(data);
      } catch (e) {
        console.error("초기 데이터 로드 실패:", e);
      } finally {
        setLoading(false);
      }
    };
    loadInitialData();
  }, []);

  // 추가 데이터 로드 (찜 무한스크롤)
  const {
    items: bookmarkedMoreItems,
    loader: bookmarkedLoader,
    hasMore: bookmarkedHasMore,
    loading: bookmarkedLoading,
  } = useInfiniteScroll<PropertyCardProps>(fetchBookmarkedItems, []);

  // 최종 리스트 (초기 데이터 + 추가 데이터)
  const bookmarkedItems = [...(initialBookmarkedProperties || []), ...(bookmarkedMoreItems || [])];

  const tabOptions = [
    { label: "찜한 매물", value: "liked" },
    { label: "최근 본 매물", value: "recent" },
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
        {loading ? (
          <div>로딩중...</div>
        ) : (
          <>
            {/* 상단: 프로필/포스트 */}
            <section className="flex inline-flex flex-col items-start justify-start gap-6 bg-white px-5 pb-6 pt-7">
              {/* 유저 정보 */}
              {profile && <UserProfile profile={profile} onEdit={handleEdit} />}
              {/* 포스트 박스 */}
              <PostPreview posts={myReviews} onMorePosts={handleMorePosts} />
            </section>

            {/* 하단: 탭바 + 리스트 */}
            <PropertyListSection
              tabOptions={tabOptions}
              isNumberVisible={false}
              propertyMap={{
                liked: bookmarkedItems as PropertyCardProps[],
                recent: initialRecentViewedProperties as PropertyCardProps[],
              }}
              loaders={{
                liked: bookmarkedLoader,
              }}
              hasMore={{
                liked: bookmarkedHasMore,
              }}
              loading={{
                liked: bookmarkedLoading,
              }}
            />
          </>
        )}
      </div>
    </>
  );
};

export default MyPage;
