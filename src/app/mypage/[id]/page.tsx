"use client";
import { useRouter, useParams } from "next/navigation";
import { Header } from "@/layout/Header";
import { useEffect, useState } from "react";
import UserProfile from "@/components/mypage/UserProfile";
import PostPreview from "@/components/mypage/PostPreview";
import PropertyListSection from "@/components/common/PropertyListSection";

const MyPage = () => {
  const router = useRouter();
  const { id } = useParams();

  // 1. 기본 정보(프로필, 리뷰 등)
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  // 2. 찜한 매물
  const [likedList, setLikedList] = useState<any[]>([]);
  const [likedError, setLikedError] = useState<string | null>(null);

  useEffect(() => {
    // /mypage/home fetch
    const fetchData = async () => {
      try {
        const res = await fetch("/mypage/home");
        const result = await res.json();
        setData(result.data);
      } catch (e) {
        setError("데이터를 불러오지 못했습니다.");
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // /mypage/liked-items fetch
    const fetchLiked = async () => {
      try {
        const res = await fetch("/mypage/liked-items");
        const result = await res.json();
        setLikedList(result.bookmarkedProperties);
      } catch (e) {
        setLikedError("찜한 매물 데이터를 불러오지 못했습니다.");
      }
    };
    fetchLiked();
  }, []);

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

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
        
        {/* 하단: 탭바 + 리스트 */}
        <PropertyListSection
          tabOptions={tabOptions}
          propertyMap={{
            liked: likedList,
            recent: recentViewedProperties,
          }}
          isNumberVisible={false}
        />
        {likedError && <div className="p-4 text-red-500">{likedError}</div>}
      </div>
    </>
  );
};

export default MyPage;
