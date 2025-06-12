"use client";
import PostPreview from "@/components/mypage/PostPreview";
import PropertyListSection from "@/components/common/PropertyListSection";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import { Header } from "@/layout/Header";
import { useEffect, useState } from "react";

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
          <div className="flex inline-flex w-full items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 overflow-hidden rounded-full border border-neutral-200 bg-neutral-100">
                <Image
                  src={profile.profileImageUrl}
                  alt="프로필"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <span className="text-subtitle2">{profile.nickname}</span>
            </div>
            <button onClick={handleEdit} className="rounded bg-neutral-100 px-3 py-1 text-body2">
              내 정보 수정
            </button>
          </div>

          {/* 포스트 박스 */}
          <div className="shadow3 flex flex-col items-start justify-center gap-3.5 self-stretch rounded-lg bg-white px-5 py-4 outline outline-1 outline-offset-[-1px] outline-neutral-200">
            <div className="inline-flex items-center justify-between self-stretch bg-white">
              <div className="text-title4">내가 쓴 글</div>
              <button onClick={handleMorePosts} className="flex items-center gap-1">
                <div className="text-body2 text-neutral-600">더보기</div>
                <img src="/icons/arrow-right.svg" alt="더보기" className="h-4 w-4" />
              </button>
            </div>
            <div className="flex flex-col items-start self-stretch">
              {myReviews && myReviews.length > 0 ? (
                myReviews.map((post: any, idx: number) => (
                  <PostPreview
                    key={post.reviweId || idx}
                    content={post.content}
                    likes={post.likeCount}
                    comments={post.commentCount}
                  />
                ))
              ) : (
                <div className="h-5 justify-center self-stretch text-body2 leading-tight">
                  내가 작성한 글이 없어요
                </div>
              )}
            </div>
          </div>
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
