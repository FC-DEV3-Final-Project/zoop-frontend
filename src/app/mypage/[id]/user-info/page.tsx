"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

// 임시 데이터
// const userData = {
//   profileImage: "/imgs/default-profile.jpg",
//   nickname: "지윤",
//   email: "00000@kakao.com",
// };
const UserInfoPage = () => {
  const router = useRouter();
  const { id } = useParams();

  const [account, setAccount] = useState<{
    email: string;
    nickname: string;
    profileImage: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const res = await fetch(`/api/mypage/${id}/user-info`);
        const data = await res.json();
        setAccount(data.account);
      } catch (e) {
        setError("유저 정보를 불러오지 못했습니다.");
      }
    };
    fetchUserInfo();
  }, [id]);

  const handleEditNickname = () => {
    router.push(`/mypage/${id}/user-info/edit-nickname`);
  };

  const handleEditProfileImage = () => {
    router.push(`/mypage/${id}/user-info/edit-profile-image`);
  };

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  if (!account) {
    return <div className="p-4">로딩 중...</div>;
  }

  return (
    <>
      <div className="relative">
        {/* 상단 프로필 이미지 영역 */}
        <div className="flex h-40 items-center justify-center self-stretch px-5 py-3.5">
          <button
            onClick={handleEditProfileImage}
            className="h-16 w-16 overflow-hidden rounded-full bg-gray-100"
          >
            <Image
              src={account.profileImage}
              alt="프로필"
              width={64}
              height={64}
              className="h-full w-full object-cover"
              priority
            />
          </button>
        </div>
        {/* 하단 영역 */}
        <div className="flex flex-col gap-8">
          {/* 정보 영역 */}
          <div className="flex flex-col">
            <div className="flex justify-between p-4">
              <span className="text-subtitle2">닉네임</span>
              <button className="flex gap-2" onClick={handleEditNickname}>
                <span className="text-body1">{account.nickname}</span>
                <img src="/icons/arrow-right.svg" alt="수정" className="h-6 w-6" />
              </button>
            </div>
            <div className="flex justify-between p-4">
              <span className="text-subtitle2">카카오계정</span>
              <div className="flex gap-2">
                <span className="text-body1">{account.email}</span>
              </div>
            </div>
          </div>
          {/* 버튼 영역 */}
          <div className="flex flex-col items-center gap-2 px-8">
            <button className="h-[50px] w-full rounded-small border border-gray-400 text-subtitle1 text-gray-950-dark">
              로그아웃
            </button>
            <button className="h-[28px] text-[13px] text-gray-500-alternative">회원탈퇴</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfoPage;
