"use client";
import { useRouter } from "next/navigation";
import { Header } from "@/layout/Header";
import UserProfile from "@/components/mypage/UserProfile";
import PostPreviewBox from "@/components/mypage/PostPreviewBox";
import PropertyListSection from "@/components/common/PropertyListSection";
import { PropertyCardProps } from "@/components/common/PropertyCard";
import { useMypageHomeQuery } from "@/queries/mypage/useMypageHomeQuery";
import useAuthGuard from "@/hooks/common/useAuthGuard";

const MyPage = () => {
  const router = useRouter();
  useAuthGuard();

  // 홈 데이터 조회
  const { data: homeResponse, isLoading: homeLoading } = useMypageHomeQuery();
  const homeData = homeResponse?.data;

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
      <div className="flex h-screen flex-col bg-white pt-12">
        {homeLoading ? (
          <div>로딩중...</div>
        ) : (
          <>
            {/* 상단: 프로필/포스트 */}
            <section className="flex inline-flex flex-col items-start justify-start gap-6 bg-white px-5 pb-6 pt-7">
              {/* 유저 정보 */}
              {homeData?.userInfo && <UserProfile profile={homeData.userInfo} />}
              {/* 포스트 박스 */}
              <PostPreviewBox postPreviewItems={homeData?.reviewOrComments || []} />
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
                recentViewed: (homeData?.recentViewedProperties as PropertyCardProps[]) || [],
              }}
            />
          </>
        )}
      </div>
    </>
  );
};

export default MyPage;
