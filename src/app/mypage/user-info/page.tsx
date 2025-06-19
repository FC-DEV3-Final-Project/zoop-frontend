"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Header } from "@/layout/Header";
import { useRef } from "react";
import BottomSheet from "@/components/common/BottomSheet";
import { clearAuthTokens } from "@/utils/auth";
import { useUserInfoQuery } from "@/queries/mypage/useUserInfoQuery";
import { useUpdateProfileImageMutation } from "@/queries/mypage/useUpdateProfileImageMutation";
import { useResetProfileImageMutation } from "@/queries/mypage/useResetProfileImageMutation";
import { useLogoutMutation } from "@/queries/mypage/useLogoutMutation";
import { useWithdrawMutation } from "@/queries/mypage/useWithdrawMutation";

const UserInfoPage = () => {
  const router = useRouter();
  // 파일 input ref
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const { data: account, error, refetch } = useUserInfoQuery();
  const updateProfileImageMutation = useUpdateProfileImageMutation();
  const resetProfileImageMutation = useResetProfileImageMutation();
  const logoutMutation = useLogoutMutation();
  const withdrawMutation = useWithdrawMutation({
    onSuccess: () => {
      clearAuthTokens();
      router.push("/login");
    },
    onError: () => console.log("회원탈퇴 실패"),
  });

  // 프로필 이미지 업로드
  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    updateProfileImageMutation.mutate(file);
    refetch();
  };

  // 프로필 이미지 삭제(기본이미지로 변경)
  const handleDeleteProfileImage = () => {
    resetProfileImageMutation.mutate();
    refetch();
  };

  // 로그아웃
  const handleLogout = () => {
    logoutMutation.mutate();
    clearAuthTokens();
    router.push("/login");
  };

  // 회원탈퇴
  const handleWithdraw = () => {
    withdrawMutation.mutate();
  };

  if (error) {
    return <div className="p-4 text-red-500">유저 정보를 불러오지 못했습니다.</div>;
  }

  if (!account) {
    return <div className="p-4">로딩 중...</div>;
  }

  return (
    <>
      <Header>
        <Header.Prev onPrevClick={() => router.back()} />
        <Header.Title>내 정보</Header.Title>
        <Header.Alarm onAlarmClick={() => alert("알림 클릭")} />
      </Header>
      <div className="h-screen bg-white pt-16">
        <div className="relative flex flex-col gap-[5px] bg-gray-100">
          {/* 상단 프로필 이미지 영역 */}
          <div className="flex h-40 items-center justify-center self-stretch bg-white px-5 py-3.5">
            <BottomSheet
              trigger={
                <button className="relative h-16 w-16 rounded-full bg-gray-100">
                  <Image
                    src={account.profileImageUrl}
                    alt="프로필"
                    width={64}
                    height={64}
                    className="h-full w-full overflow-hidden rounded-full object-cover"
                    priority
                  />
                  <div className="absolute bottom-0 right-0">
                    <img src="/icons/image-upload.svg" alt="이미지 업로드" />
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleProfileImageChange}
                  />
                </button>
              }
              title="프로필 변경"
            >
              {(close) => (
                <div>
                  <button
                    className="flex h-[48px] w-full cursor-pointer items-center justify-start px-[20px] text-left text-body1 hover:bg-gray-200"
                    onClick={() => {
                      fileInputRef.current?.click();
                      close();
                    }}
                  >
                    파일에서 가져오기
                  </button>
                  <button
                    className="flex h-[48px] w-full cursor-pointer items-center justify-start px-[20px] text-left text-body1 hover:bg-gray-200"
                    onClick={() => {
                      handleDeleteProfileImage();
                      close();
                    }}
                  >
                    프로필 사진 삭제
                  </button>
                </div>
              )}
            </BottomSheet>
          </div>
          {/* 하단 영역 */}
          <div className="flex flex-col gap-8 bg-white">
            {/* 정보 영역 */}
            <div className="flex flex-col">
              <div className="flex justify-between p-4">
                <span className="text-subtitle2">닉네임</span>
                <button
                  className="flex gap-2"
                  onClick={() => router.push(`/mypage/user-info/edit-nickname`)}
                >
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
              <button
                className="h-[50px] w-full rounded-small border border-gray-400 text-subtitle1 text-gray-950-dark"
                onClick={handleLogout}
              >
                로그아웃
              </button>
              <button
                className="h-[28px] text-[13px] text-gray-500-alternative"
                onClick={handleWithdraw}
              >
                회원탈퇴
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfoPage;
