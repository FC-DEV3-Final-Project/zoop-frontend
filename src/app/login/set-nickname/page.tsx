"use client";
import React, { useEffect, useState } from "react";
import { Header } from "@/layout/Header";
import { Button } from "@/components/ui/button";
import { createUserNickname } from "@/apis/login/createUserNickname";
import { useRouter } from "next/navigation";
import NicknameInput from "@/components/common/NicknameInput";
import { getUserInfo } from "@/apis/login/getUserInfo";
import { useUserInfoStore } from "@/stores/useUserInfoStore";

const Page = () => {
  const router = useRouter();
  const [nickname, setNickname] = useState("");
  const [isValid, setIsValid] = useState(false);

  const { setUser } = useUserInfoStore(); // 상태 저장 함수 가져오기

  const handleSubmit = async () => {
    try {
      await createUserNickname(nickname);
      const userData = await getUserInfo();

      setUser(userData); // Zustand에 유저 정보 저장

      router.push("/");
    } catch (err) {
      console.error("닉네임 입력발생");
    }
  };

  return (
    <div>
      <Header bgColorClassName="bg-white/0">
        <div className="w-6" />
        <Header.Title>ZOOP</Header.Title>
        <Header.Close onCloseClick={() => alert("닫기 클릭")} />
      </Header>
      <div className="flex h-screen w-full flex-col items-center justify-center bg-white px-5 pt-16">
        <span className="mb-5 text-center text-title5">닉네임을 설정해주세요</span>
        <NicknameInput nickname={nickname} setNickname={setNickname} setIsValid={setIsValid} />
        <Button
          variant={"default"}
          className="mt-32 w-full"
          onClick={handleSubmit}
          disabled={!isValid}
        >
          완료
        </Button>
      </div>
    </div>
  );
};

export default Page;
