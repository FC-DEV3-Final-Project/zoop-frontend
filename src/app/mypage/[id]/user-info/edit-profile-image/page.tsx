"use client";

import { Header } from "@/layout/Header";
import Image from "next/image";
import { useRouter } from "next/navigation";

const EditProfileImage = () => {
  const router = useRouter();
  return (
    <>
    <Header>
        <Header.Prev onPrevClick={() => router.back()} />
        <Header.Title>프로필 이미지 변경</Header.Title>
        <Header.Alarm onAlarmClick={() => alert("알림 클릭")} />
      </Header>
    <div className="relative flex h-full flex-col pt-16">
      {/* 아이콘 */}
      <button className="absolute right-5 top-3">
        <img src="/icons/x.svg" alt="닫기" className="h-6 w-6" />
      </button>
      {/* 이미지 영역 */}
      <div className="flex flex-1 items-center justify-center">
        <div className="relative aspect-square w-full">
          <Image src="/imgs/default-profile.jpg" alt="프로필" fill className="object-cover" />
        </div>
      </div>
      {/* 버튼 영역 */}
      <div className="flex h-14">
        <div className="flex flex-1 items-center justify-center">
          <span className="text-body1">변경하기</span>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <span className="text-body1">삭제하기</span>
        </div>
      </div>
    </div>
    </>
  );
};

export default EditProfileImage;
