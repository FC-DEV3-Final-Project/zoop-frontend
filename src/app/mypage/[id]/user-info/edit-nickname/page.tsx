"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditNickname() {
  const [nickname, setNickname] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= 20) {
      setNickname(value);
    }
  };

  return (
    <div className="relative h-screen bg-white">
      <div className="absolute top-[61px] inline-flex w-full flex-col items-start justify-start gap-4 p-5">
        <div className="justify-center self-stretch font-['Pretendard'] text-base font-semibold leading-snug text-black">
          닉네임
        </div>
        <div className="inline-flex items-center justify-between self-stretch rounded-lg px-4 py-3 outline outline-1 outline-offset-[-1px] outline-gray-200">
          <input
            type="text"
            value={nickname}
            onChange={handleChange}
            placeholder="닉네임을 입력해주세요."
            className="w-full text-sm text-gray-800 placeholder-gray-300 focus:outline-none"
          />
          <div className="justify-center font-['Pretendard'] text-sm font-semibold leading-tight text-gray-300">
            {nickname.length}/20
          </div>
        </div>
      </div>
    </div>
  );
}
