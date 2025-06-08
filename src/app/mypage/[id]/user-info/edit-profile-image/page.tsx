"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function EditProfileImage() {
  return (
    <div className="relative flex h-full flex-col">
      {/* 아이콘 */}
      <button className="absolute right-5 top-3">
        <Image src="/icons/x.svg" alt="닫기" width={24} height={24} />
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
  );
}
