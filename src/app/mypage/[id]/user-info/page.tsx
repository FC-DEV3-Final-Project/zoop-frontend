"use client";

import { useParams, useRouter } from "next/navigation";

// 임시 데이터
const userData = {
  profileImage: "/imgs/default-profile.jpg",
  nickname: "지윤",
  email: "00000@kakao.com",
};

const UserInfoPage = () => {
  const router = useRouter();
  const { id } = useParams();

  const handleEditNickname = () => {
    router.push(`/mypage/${id}/user-info/edit-nickname`);
  };

  const handleEditProfileImage = () => {
    router.push(`/mypage/${id}/user-info/edit-profile-image`);
  };

  return (
    <>
      <div className="relative">
        {/* 상단 프로필 이미지 영역 */}
        <div className="flex h-40 items-center justify-center self-stretch px-5 py-3.5">
          <button
            onClick={() => handleEditProfileImage()}
            className="h-16 w-16 overflow-hidden rounded-full bg-gray-100"
          >
            <img src={userData.profileImage} alt="프로필" className="h-full w-full object-cover" />
          </button>
        </div>
        {/* 하단 영역 */}
        <div className="flex flex-col gap-8">
          {/* 정보 영역 */}
          <div className="flex flex-col">
            <div className="flex justify-between p-4">
              <span className="text-subtitle2">닉네임</span>
              <button className="flex gap-2" onClick={() => handleEditNickname()}>
                <span className="text-body1">{userData.nickname}</span>
                <img src="/icons/arrow-right.svg" alt="수정" className="h-6 w-6" />
              </button>
            </div>
            <div className="flex justify-between p-4">
              <span className="text-subtitle2">카카오계정</span>
              <div className="flex gap-2">
                <span className="text-body1">{userData.email}</span>
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
