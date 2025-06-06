"use client";
import PostPreview from "@/components/common/PostPreview";
import PropertyListSection from "@/components/common/PropertyListSection";
import { useRouter, useParams } from "next/navigation";

export default function MyPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { id } = useParams();

  // 임시 데이터
  const userData = {
    profileImage: "/imgs/default-profile.png",
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
      id: 1,
      imageUrl: "/imgs/propertyExample.png",
      transactionType: "전세",
      price: "1억 3,000",
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

  const tabOptions = [
    { label: "찜한 매물", value: "liked" },
    { label: "최근 본 매물", value: "recent" },
  ];

  const handleEdit = () => {
    alert("내 정보 수정 클릭!");
  };
  const handleMorePosts = () => {
    router.push(`/mypage/${id}/myposts`);
  };

  const handleMapView = () => {
    alert("지도에서 보기 클릭!");
  };

  return (
    <div className="flex h-screen flex-col">
      {/* 상단: 프로필/포스트 */}
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
      />
    </div>
  );
}
