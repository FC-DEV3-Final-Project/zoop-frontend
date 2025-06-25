"use client";

import NicknameInput from "@/components/common/NicknameInput";
import { Button } from "@/components/ui/button";
import { Header } from "@/layout/Header";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useUpdateNicknameMutation } from "@/queries/mypage/useUpdateNicknameMutation";
import toast from "react-hot-toast";
import CustomToast from "@/components/common/CustomToast";

const EditNickname = () => {
  const router = useRouter();
  const [nickname, setNickname] = useState("");
  const [isValid, setIsValid] = useState(false);

  const updateNicknameMutation = useUpdateNicknameMutation({
    onSuccess: () => {
      toast.custom(
        ({ id }) => (
          <CustomToast
            message="닉네임이 성공적으로 변경되었습니다."
            type="success"
            onClickAction={() => toast.dismiss(id)}
          />
        ),
        { duration: 3000 },
      );
      router.push("/mypage/user-info");
    },
    onError: () => {
      toast.custom(
        ({ id }) => (
          <CustomToast
            message="닉네임 변경에 실패했습니다. 잠시 후 다시 시도해주세요."
            type="error"
            onClickAction={() => toast.dismiss(id)}
          />
        ),
        { duration: 3000 },
      );
    },
  });

  // 닉네임 변경
  const handleSubmit = () => {
    updateNicknameMutation.mutate(nickname);
    // 로컬스토리지 업데이트
    const stored = localStorage.getItem("userInfo-storage");
    if (stored) {
      const parsed = JSON.parse(stored);
      parsed.state.user.nickname = nickname;
      localStorage.setItem("userInfo-storage", JSON.stringify(parsed));
    }
  };

  return (
    <>
      <Header>
        <Header.Prev onPrevClick={() => router.back()} />
        <Header.Title>내 정보</Header.Title>
        <Header.Alarm onAlarmClick={() => alert("알림 클릭")} />
      </Header>
      <div className="relative min-h-screen bg-white pt-12">
        <div className="flex w-full flex-col items-start justify-start gap-[10px] p-5 pt-[81px]">
          <div className="justify-center text-subtitle2">닉네임</div>
          <NicknameInput nickname={nickname} setNickname={setNickname} setIsValid={setIsValid} />
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
