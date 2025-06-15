"use client";

import { Button } from "@/components/ui/button";
import { Header } from "@/layout/Header";
import { useRouter } from "next/navigation";
import { useState } from "react";

const EditNickname = () => {
  const router = useRouter();
  const [nickname, setNickname] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const handleDuplicateCheck = () => {
    if (nickname === "test") {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  return (
    <>
      <Header>
        <Header.Prev onPrevClick={() => router.back()} />
        <Header.Title>내 정보</Header.Title>
        <Header.Alarm onAlarmClick={() => alert("알림 클릭")} />
      </Header>
      <div className="relative min-h-screen bg-white pt-16">
        <div className="flex w-full flex-col items-start justify-start gap-[10px] p-5 pt-[81px]">
          <div className="justify-center text-subtitle2">닉네임</div>
          <div
            className={`flex items-center justify-between self-stretch rounded-small px-4 py-3 outline outline-1 outline-offset-[-1px] ${isValid === false ? "outline-[#FF0000]" : isValid === true ? "outline-blue-800-primary" : "outline-gray-200"}`}
          >
            <input
              type="text"
              value={nickname}
              onChange={(e) => {
                setNickname(e.target.value);
              }}
              maxLength={20}
              placeholder=" 닉네임을 입력해주세요."
              className="w-full text-body1 placeholder-gray-300 focus:outline-none"
            />
            <button
              onClick={handleDuplicateCheck}
              disabled={nickname.length === 0}
              className={`inline-flex items-center justify-center rounded-small px-4 py-1 outline outline-1 outline-offset-[-1px] ${
                nickname.length > 0
                  ? "bg-blue-050-bg text-blue-700 outline-blue-800-primary"
                  : "bg-gray-200 text-gray-700-info outline-gray-500-alternative"
              }`}
            >
              <p className="justify-start whitespace-nowrap text-caption1">중복확인</p>
            </button>
          </div>
          <p
            className={`text-body3 ${isValid ? "text-blue-800-primary" : isValid === false ? "text-[#FF0000]" : "text-gray-700-info"}`}
          >
            {nickname
              ? isValid
                ? "사용 가능한 닉네임입니다"
                : isValid === false
                  ? "이미 사용중인 닉네임입니다"
                  : "2~10자, 한글·영문·숫자만 가능 (공백·특수문자 제외)"
              : ""}
          </p>
        </div>
        <div className="absolute bottom-4 left-1/2 w-full -translate-x-1/2 px-4">
          <Button variant={"default"} disabled={!isValid}>
            확인
          </Button>
        </div>
      </div>
    </>
  );
};

export default EditNickname;
