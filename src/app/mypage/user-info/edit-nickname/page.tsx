"use client";

import NicknameInput from "@/components/common/NicknameInput";
import { Button } from "@/components/ui/button";
import { Header } from "@/layout/Header";
import { useRouter } from "next/navigation";
import { useState } from "react";
import updateNickname from "@/apis/mypage/fetchUpdateNickname";

const EditNickname = () => {
  const router = useRouter();
  const [nickname, setNickname] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const ok = await updateNickname(nickname);
    if (ok) {
      alert("닉네임 변경 완료.");
      router.back();
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
          <NicknameInput
            nickname={nickname}
            setNickname={setNickname}
            isValid={isValid}
            setIsValid={setIsValid}
          />
        </div>
        <div className="absolute bottom-4 left-1/2 w-full -translate-x-1/2 px-4">
          <Button variant={"default"} disabled={!isValid} onClick={handleSubmit}>
            확인
          </Button>
        </div>
      </div>
    </>
  );
};

export default EditNickname;
