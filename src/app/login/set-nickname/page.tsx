"use client";
import React, { useEffect, useState } from "react";
import { Header } from "@/layout/Header";
import { Button } from "@/components/ui/button";
import { createUserNickname } from "@/apis/login/user";
import { useRouter } from "next/navigation";
import useAuthFromHash from "@/hooks/common/useAuthFromHash";

const Page = () => {
  const router = useRouter();
  const [nickname, setNickname] = useState("");
  const [loading, setLoading] = useState(false);

  useAuthFromHash();

  const validateNickname = (value: string): string | null => {
    const trimmed = value.trim();

    if (!trimmed) return "닉네임을 입력해주세요.";
    if (value[0] === " ") return "닉네임은 공백으로 시작할 수 없습니다.";
    if (trimmed.length < 2 || trimmed.length > 10)
      return "닉네임은 2자 이상 10자 이하로 입력해주세요.";
    if (!/^[가-힣a-zA-Z0-9]+$/.test(trimmed))
      return "닉네임은 한글, 영문, 숫자만 사용할 수 있어요.";

    return null; // 유효함
  };

  const handleSubmit = async () => {
    const error = validateNickname(nickname);
    if (error) {
      alert(error);
      return;
    }

    try {
      await createUserNickname(nickname);
      alert("통신 성공");
      router.push("/");
    } catch (err) {
      alert("닉네임 등록 중 오류가 발생했습니다.");
    }
  };

  return (
    <div>
      <Header bgColorClassName="bg-white/0">
        <div className="w-6" />
        <Header.Title>ZOOP</Header.Title>
        <Header.Close onCloseClick={() => alert("닫기 클릭")} />
      </Header>
      {/* <div className="flex min-h-screen w-full flex-col items-center justify-center gap-5 px-5 pt-16"> */}
      <div className="flex h-screen w-full flex-col items-center justify-center bg-white px-5 pt-16">
        <span className="text-center text-title5">닉네임을 설정해주세요</span>

        <div
          className={`flex items-center justify-between self-stretch rounded-small px-4 py-3 outline outline-1 outline-offset-[-1px] outline-gray-500-alternative`}
        >
          <input
            type="text"
            value={nickname}
            onChange={(e) => {
              setNickname(e.target.value);
            }}
            maxLength={20}
            placeholder="닉네임을 입력해주세요. (최대 20자)"
            className="w-full bg-white/0 text-body1 placeholder-gray-300 focus:outline-none"
          />
          <button
            onClick={() => alert("중복확인 클릭")}
            disabled={nickname.length === 0 || loading}
            className={`inline-flex items-center justify-center rounded-small px-4 py-1 outline outline-1 outline-offset-[-1px] ${
              nickname.length > 0
                ? "bg-blue-050-bg text-blue-700 outline-blue-800-primary"
                : "bg-gray-200 text-gray-700-info outline-gray-500-alternative"
            }`}
          >
            <p className="justify-start whitespace-nowrap text-caption1">
              {loading ? "확인 중..." : "중복확인"}
            </p>
          </button>
        </div>
        {/* 버튼 */}
        <Button
          variant={"default"}
          className="mt-32 w-full"
          onClick={handleSubmit}
          disabled={nickname.length === 0 || loading}
        >
          완료
        </Button>
      </div>
    </div>
  );
};

export default Page;
