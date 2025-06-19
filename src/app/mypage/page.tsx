"use client";
import { useRouter } from "next/navigation";
import { Header } from "@/layout/Header";
import UserProfile from "@/components/mypage/UserProfile";
import PostPreviewBox from "@/components/mypage/PostPreviewBox";
import PropertyListSection from "@/components/common/PropertyListSection";
import useInfiniteScroll from "@/hooks/common/useInfiniteScroll";
import { PropertyCardProps } from "@/components/common/PropertyCard";
import fetchBookmarkedProperties from "@/apis/mypage/fetchBookmarkedProperties";
import { useMypageHomeQuery } from "@/queries/mypage/useMypageHomeQuery";

const MyPage = () => {
  const router = useRouter();

  const { data: homeResponse, isLoading: homeLoading } = useMypageHomeQuery();
  const homeData = homeResponse?.data;

  // 무한스크롤 테스트용 페이지 사이즈
  const PAGE_SIZE = 2;

  // 2. 추가 데이터 (bookmark API)
  const {
    items: additionalItems,
    loader,
    hasMore,
    loading: bookmarkedLoading,
  } = useInfiniteScroll<PropertyCardProps>(
    async (page) => {
      if (
        !homeData?.activity?.bookmarkedPropertyCount ||
        homeData.activity.bookmarkedPropertyCount < PAGE_SIZE
      ) {
        return { content: [], hasNext: false };
      }
      // 무한스크롤 테스트용 2초 대기
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return fetchBookmarkedProperties(page);
    },
    [homeData?.bookmarkedProperties],
  );

  // 최종 리스트 (초기 데이터 + 추가 데이터)
  const bookmarkedItems = [...(homeData?.bookmarkedProperties || []), ...additionalItems];

  const tabOptions = [
    { label: "찜한 매물", value: "bookmarked" },
    { label: "최근 본 매물", value: "recentViewed" },
  ];

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
              {homeData?.profile && <UserProfile profile={homeData.profile} />}
              {/* 포스트 박스 */}
              <PostPreviewBox posts={homeData?.myReviews || []} />
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
                recentViewed: (homeData?.recentViewedProperties as PropertyCardProps[]) || [],
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
