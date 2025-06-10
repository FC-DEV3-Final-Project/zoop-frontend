"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

const EditNickname = () => {
  const [nickname, setNickname] = useState("");

  return (
    <div className="relative h-full bg-white">
      <div className="absolute top-[61px] inline-flex w-full flex-col items-start justify-start gap-4 p-5">
        <div className="justify-center text-subtitle2">닉네임</div>
        <div className="flex items-center justify-between self-stretch rounded-small px-4 py-3 outline outline-1 outline-offset-[-1px] outline-gray-200">
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            maxLength={20}
            placeholder=" 닉네임을 입력해주세요. (최대 20자)"
            className="w-full text-caption2 placeholder-gray-300 focus:outline-none"
          />
          <button
            className={`inline-flex items-center justify-center rounded-small px-4 py-1 outline outline-1 outline-offset-[-1px] ${
              nickname.length > 0
                ? "bg-blue-050-bg text-blue-700 outline-blue-800-primary"
                : "bg-gray-200 text-gray-700-info outline-gray-500-alternative"
            }`}
          >
            <p className="justify-start whitespace-nowrap text-caption1">중복확인</p>
          </button>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 w-full -translate-x-1/2 px-4">
        <Button variant={"default"}>확인</Button>
      </div>
    </div>
  );
};

export default EditNickname;
