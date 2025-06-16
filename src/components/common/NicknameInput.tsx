import { useState } from "react";

interface NicknameInputProps {
  nickname: string;
  setNickname: (nickname: string) => void;
  isValid: boolean | null;
  setIsValid: (isValid: boolean) => void;
}

const NicknameInput = ({ nickname, setNickname, isValid, setIsValid }: NicknameInputProps) => {

  const handleDuplicateCheck = () => {
    if (nickname === "test") {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  return (
    <>
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
    </>
  );
};

export default NicknameInput;
