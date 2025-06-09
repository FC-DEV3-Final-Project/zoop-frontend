"use client";

import { useState } from "react";

export default function ReviewTextarea() {
  const [value, setValue] = useState("");

  const placeholderText = `장점과 단점, 알려주고 싶은 이야기, 유용한 팁 등을 적어주세요.\n\n다른 사람을 비방하거나, 타인에게 불쾌감을 유발하는 부적절한 표현, 영리 목적의 광고는 삼가해주세요!`;

  return (
    <div className="mb-[18px] flex flex-col">
      <div className="flex justify-between">
        <div className="text-title4 text-black">내용을 작성해주세요</div>
        <div className="text-caption2 text-gray-600-hint">{value.length}/500</div>
      </div>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholderText}
        maxLength={500}
        className={`mt-2 h-[160px] w-full resize-none rounded-[8px] bg-gray-100 px-[20px] py-[16px] text-body3 placeholder:text-body3 placeholder:text-gray-800 focus:outline-none ${value ? "text-black" : ""} `}
      />
    </div>
  );
}
