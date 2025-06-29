import { useState } from "react";
import { useCheckUserNicknameQuery } from "@/queries/common/useCheckUserNicknameQuery";

interface NicknameInputProps {
  nickname: string;
  setNickname: (nickname: string) => void;
  setIsValid: (isValid: boolean) => void;
}

const NicknameInput = ({ nickname, setNickname, setIsValid }: NicknameInputProps) => {
  const [status, setStatus] = useState<string>("");
  const { refetch } = useCheckUserNicknameQuery(nickname, false);

  const handleNicknameValidation = () => {
    // 유효성검사
    const nicknameRegex = /^[가-힣a-zA-Z0-9]{2,10}$/;
    if (!nicknameRegex.test(nickname)) {
      setStatus("invalid");
      return;
    }

    // React Query의 refetch 사용
    refetch().then((result) => {
      if (result.isError) {
        setStatus("");
        setIsValid(false);
        return;
      }
      if (result.data?.isDuplicated) {
        // 중복
        setStatus("duplicate");
        setIsValid(false);
      } else {
        // 사용가능
        setStatus("available");
        setIsValid(true);
      }
    });
  };

  return (
    <>
      <div
        className={`flex h-[53px] items-center justify-between self-stretch rounded-small px-4 py-3 outline outline-1 outline-offset-[-1px] ${status === "invalid" || status === "duplicate" ? "outline-[#FF0000]" : status === "available" ? "outline-blue-800-primary" : "outline-gray-200"}`}
      >
        <input
          type="text"
          value={nickname}
          onChange={(e) => {
            setNickname(e.target.value);
            setIsValid(false);
          }}
          maxLength={20}
          placeholder=" 닉네임을 입력해주세요."
          className="w-full text-body1 placeholder-gray-300 focus:outline-none"
        />
        <button
          onClick={handleNicknameValidation}
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
      <div
        className={`h-[17px] text-body3 ${status === "available" ? "text-blue-800-primary" : status === "invalid" || status === "duplicate" ? "text-[#FF0000]" : "text-gray-700-info"}`}
      >
        {nickname
          ? status === "available"
            ? "사용 가능한 닉네임입니다"
            : status === "duplicate"
              ? "이미 사용중인 닉네임입니다"
              : "2~10자, 한글·영문·숫자만 가능 (공백·특수문자 제외)"
          : ""}
      </div>
    </>
  );
};

export default NicknameInput;
