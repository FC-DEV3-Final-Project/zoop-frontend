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

  // 1. 기본 정보(프로필, 리뷰 등)
  const [data, setData] = useState<any>(null);
  const [profileError, setProfileError] = useState<string | null>(null);

  // 2. 찜한 매물 무한 스크롤
  const fetchLikedItems = async (page: number) => {
    try {
      const res = await fetch(`/mypage/liked-items?page=${page}`);
      const result = await res.json();
      return result.bookmarkedProperties as PropertyCardProps[];
    } catch (e) {
      setLikedError("찜한 매물 데이터를 불러오지 못했습니다.");
      return [];
    }
  };

  const {
    items: likedList,
    loader: likedLoader,
    hasMore: hasMoreLiked,
    loading: loadingLiked,
  } = useInfiniteScroll<PropertyCardProps>(fetchLikedItems, []);
  const [likedError, setLikedError] = useState<string | null>(null);

  useEffect(() => {
    // /mypage/home fetch
    const fetchData = async () => {
      try {
        const res = await fetch("/mypage/home");
        const result = await res.json();
        setData(result.data);
      } catch (e) {
        setProfileError("데이터를 불러오지 못했습니다.");
      }
    };
    fetchData();
  }, []);

  if (!data) {
    return <div className="p-4">로딩 중...</div>;
  }

  const { profile, myReviews, recentViewedProperties } = data;

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
        {/* 상단: 프로필/포스트 */}
        <section className="flex inline-flex flex-col items-start justify-start gap-6 bg-white px-5 pb-6 pt-7">
          {/* 유저 정보 */}
          <UserProfile profile={profile} onEdit={handleEdit} />
          {/* 포스트 박스 */}
          <PostPreview posts={myReviews} onMorePosts={handleMorePosts} />
        </section>
        {profileError && <div className="p-4 text-red-500">{profileError}</div>}

        {/* 하단: 탭바 + 리스트 */}
        <PropertyListSection
          tabOptions={tabOptions}
          propertyMap={{
            liked: likedList,
            recent: recentViewedProperties,
          }}
          isNumberVisible={false}
          loaders={{
            liked: likedLoader,
          }}
          loadingStates={{
            liked: loadingLiked,
          }}
          hasMore={{
            liked: hasMoreLiked,
          }}
          errors={{
            liked: likedError,
          }}
        />
      </div>
    </>
  );
};

export default MyPage;
