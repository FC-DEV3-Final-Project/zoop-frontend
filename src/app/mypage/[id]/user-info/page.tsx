"use client";

import { useParams, useRouter } from "next/navigation";

// 임시 데이터
const userData = {
  profileImage: "/imgs/default-profile.png",
  nickname: "지윤",
  email: "00000@kakao.com",
};

export default function UserInfoPage() {
  const router = useRouter();
  const { id } = useParams();

  const handleEditNickname = () => {
    router.push(`/mypage/${id}/user-info/edit-nickname`);
  };

  return (
    <>
      <div className="relative h-screen bg-white">
        {/* 상단 프로필 이미지 영역 */}
        <div className="flex h-40 items-center justify-center self-stretch bg-white px-5 py-3.5">
          <img
            src={userData.profileImage}
            alt="프로필"
            className="h-16 w-16 rounded-full bg-gray-100 object-cover"
          />
        </div>
        {/* 하단 영역 */}
        <div className="flex flex-col gap-8 bg-white">
          {/* 정보 영역 */}
          <div className="flex flex-col">
            <div className="flex justify-between p-4">
              <span className="font-semibold">닉네임</span>
              <button className="flex gap-2" onClick={() => handleEditNickname()}>
                <span>{userData.nickname}</span>
                <img src="/icons/arrow-right.svg" alt="수정" className="h-6 w-6" />
              </button>
            </div>
            <div className="flex justify-between p-4">
              <span className="font-semibold">카카오계정</span>
              <div className="flex gap-2">
                <span>{userData.email}</span>
              </div>
            </div>
          </div>
          {/* 버튼 영역 */}
          <div className="flex flex-col items-center gap-2 px-8">
            <button className="h-12 w-full rounded-lg border border-gray-200 text-lg font-semibold text-zinc-800">
              로그아웃
            </button>
            <button className="text-xs text-gray-300">회원탈퇴</button>
          </div>
        </div>
      </div>
    </>
  );
}
