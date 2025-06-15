"use client";
import PostPreview from "@/components/mypage/PostPreview";
import PropertyListSection from "@/components/common/PropertyListSection";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import { Header } from "@/layout/Header";

const MyPage = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const { id } = useParams();

  // 임시 데이터
  const userData = {
    profileImage: "/imgs/default-profile.jpg",
    name: "지윤",
    posts: [
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
      propertyId: 1,
      order: 1,
      tradeTypeName: "전세",
      rentPrice: undefined,
      warrantPrice: 13000,
      dealPrice: 0,
      dealOrWarrantPrc: "1억 3,000",
      summary: ["풀옵션", "xx역 도보 n분", "대학교 인접"],
      realestateTypeName: "주상복합",
      aptName: "방배마에스트로",
      articleName: "방배마에스트로",
      buildingName: "1동 703호",
      area2: "34.5",
      isBookmarked: true,
      isActive: false,
      imageUrl: "/imgs/propertyExample.png",
      latitude: 37.471515,
      longitude: 126.972487,
    },
    {
      propertyId: 2,
      order: 2,
      tradeTypeName: "전세",
      rentPrice: undefined,
      warrantPrice: 27500,
      dealPrice: 0,
      dealOrWarrantPrc: "2억 7,500",
      summary: ["헬스장 근처", "카페많음", "대학교 인접"],
      realestateTypeName: "주상복합",
      aptName: "방배마에스트로",
      articleName: "방배마에스트로",
      buildingName: "201동 1103호",
      area2: "38.67",
      isBookmarked: true,
      isActive: true,
      imageUrl: "/imgs/propertyExample.png",
      latitude: 37.471515,
      longitude: 126.972487,
    },
    {
      propertyId: 3,
      order: 3,
      tradeTypeName: "전세",
      rentPrice: undefined,
      warrantPrice: 53000,
      dealPrice: 0,
      dealOrWarrantPrc: "5억 3,000",
      summary: ["풀옵션", "xx역 도보 n분", "대학교 인접"],
      realestateTypeName: "주상복합",
      aptName: "방배마에스트로",
      articleName: "방배마에스트로",
      buildingName: "1동 703호",
      area2: "34.5",
      isBookmarked: false,
      isActive: true,
      imageUrl: "/imgs/propertyExample.png",
      latitude: 37.471515,
      longitude: 126.972487,
    },
    {
      propertyId: 4,
      order: 4,
      tradeTypeName: "전세",
      rentPrice: undefined,
      warrantPrice: 27500,
      dealPrice: 0,
      dealOrWarrantPrc: "2억 7,500",
      summary: ["헬스장 근처", "카페많음", "대학교 인접"],
      realestateTypeName: "주상복합",
      aptName: "방배마에스트로",
      articleName: "방배마에스트로",
      buildingName: "201동 1103호",
      area2: "38.67",
      isBookmarked: false,
      isActive: true,
      imageUrl: "/imgs/propertyExample.png",
      latitude: 37.471515,
      longitude: 126.972487,
    },
    {
      propertyId: 5,
      order: 5,
      tradeTypeName: "전세",
      rentPrice: undefined,
      warrantPrice: 53000,
      dealPrice: 0,
      dealOrWarrantPrc: "5억 3,000",
      summary: ["풀옵션", "xx역 도보 n분", "대학교 인접"],
      realestateTypeName: "주상복합",
      aptName: "방배마에스트로",
      articleName: "방배마에스트로",
      buildingName: "1동 703호",
      area2: "34.5",
      isBookmarked: false,
      isActive: true,
      imageUrl: "/imgs/propertyExample.png",
      latitude: 37.471515,
      longitude: 126.972487,
    },
    {
      propertyId: 6,
      order: 6,
      tradeTypeName: "전세",
      rentPrice: undefined,
      warrantPrice: 27500,
      dealPrice: 0,
      dealOrWarrantPrc: "2억 7,500",
      summary: ["헬스장 근처", "카페많음", "대학교 인접"],
      realestateTypeName: "주상복합",
      aptName: "방배마에스트로",
      articleName: "방배마에스트로",
      buildingName: "201동 1103호",
      area2: "38.67",
      isBookmarked: false,
      isActive: true,
      imageUrl: "/imgs/propertyExample.png",
      latitude: 37.471515,
      longitude: 126.972487,
    },
  ];

  const recentProperties = [
    {
      propertyId: 1,
      order: 1,
      tradeTypeName: "전세",
      rentPrice: undefined,
      warrantPrice: 53000,
      dealPrice: 0,
      dealOrWarrantPrc: "5억 3,000",
      summary: ["풀옵션", "xx역 도보 n분", "대학교 인접"],
      realestateTypeName: "주상복합",
      aptName: "방배마에스트로",
      articleName: "방배마에스트로",
      buildingName: "1동 703호",
      area2: "34.5",
      isBookmarked: false,
      isActive: true,
      imageUrl: "/imgs/propertyExample.png",
      latitude: 37.471515,
      longitude: 126.972487,
    },
    {
      propertyId: 2,
      order: 2,
      tradeTypeName: "전세",
      rentPrice: undefined,
      warrantPrice: 27500,
      dealPrice: 0,
      dealOrWarrantPrc: "2억 7,500",
      summary: ["헬스장 근처", "카페많음", "대학교 인접"],
      realestateTypeName: "주상복합",
      aptName: "방배마에스트로",
      articleName: "방배마에스트로",
      buildingName: "201동 1103호",
      area2: "38.67",
      isBookmarked: false,
      isActive: true,
      imageUrl: "/imgs/propertyExample.png",
      latitude: 37.471515,
      longitude: 126.972487,
    },
    {
      propertyId: 3,
      order: 3,
      tradeTypeName: "전세",
      rentPrice: undefined,
      warrantPrice: 53000,
      dealPrice: 0,
      dealOrWarrantPrc: "5억 3,000",
      summary: ["풀옵션", "xx역 도보 n분", "대학교 인접"],
      realestateTypeName: "주상복합",
      aptName: "방배마에스트로",
      articleName: "방배마에스트로",
      buildingName: "1동 703호",
      area2: "34.5",
      isBookmarked: false,
      isActive: true,
      imageUrl: "/imgs/propertyExample.png",
      latitude: 37.471515,
      longitude: 126.972487,
    },
    {
      propertyId: 4,
      order: 4,
      tradeTypeName: "전세",
      rentPrice: undefined,
      warrantPrice: 27500,
      dealPrice: 0,
      dealOrWarrantPrc: "2억 7,500",
      summary: ["헬스장 근처", "카페많음", "대학교 인접"],
      realestateTypeName: "주상복합",
      aptName: "방배마에스트로",
      articleName: "방배마에스트로",
      buildingName: "201동 1103호",
      area2: "38.67",
      isBookmarked: false,
      isActive: true,
      imageUrl: "/imgs/propertyExample.png",
      latitude: 37.471515,
      longitude: 126.972487,
    },
    {
      propertyId: 5,
      order: 5,
      tradeTypeName: "전세",
      rentPrice: undefined,
      warrantPrice: 53000,
      dealPrice: 0,
      dealOrWarrantPrc: "5억 3,000",
      summary: ["풀옵션", "xx역 도보 n분", "대학교 인접"],
      realestateTypeName: "주상복합",
      aptName: "방배마에스트로",
      articleName: "방배마에스트로",
      buildingName: "1동 703호",
      area2: "34.5",
      isBookmarked: false,
      isActive: true,
      imageUrl: "/imgs/propertyExample.png",
      latitude: 37.471515,
      longitude: 126.972487,
    },
    {
      propertyId: 6,
      order: 6,
      tradeTypeName: "전세",
      rentPrice: undefined,
      warrantPrice: 27500,
      dealPrice: 0,
      dealOrWarrantPrc: "2억 7,500",
      summary: ["헬스장 근처", "카페많음", "대학교 인접"],
      realestateTypeName: "주상복합",
      aptName: "방배마에스트로",
      articleName: "방배마에스트로",
      buildingName: "201동 1103호",
      area2: "38.67",
      isBookmarked: false,
      isActive: true,
      imageUrl: "/imgs/propertyExample.png",
      latitude: 37.471515,
      longitude: 126.972487,
    },
  ];

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

  const handleMapView = () => {
    alert("지도에서 보기 클릭!");
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
                  src={userData.profileImage}
                  alt="프로필"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <span className="text-subtitle2">{userData.name}</span>
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
              {userData.posts.length > 0 ? (
                userData.posts.map((post, idx) => <PostPreview key={idx} {...post} />)
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
            liked: likedProperties,
            recent: recentProperties,
          }}
          isNumberVisible={false}
        />
      </div>
    </>
  );
};

export default MyPage;
