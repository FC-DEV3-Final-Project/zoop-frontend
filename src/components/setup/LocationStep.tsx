import React, { useState } from "react";
import { Button } from "../ui/button";
import SearchIcon from "../../../public/icons/search.svg";
import Image from "next/image";

interface LocationStepProps {
  onNext: () => void;
}

// 임시
const dummyData = [
  { title: "이수역 7호선", detail: "서울 동작구 동작대로 105-2" },
  { title: "이수역 7호선", detail: "서울 동작구 동작대로 104-2" },
  { title: "이수역 7호선", detail: "서울 동작구 동작대로 105-2" },
  { title: "이수역 7호선", detail: "서울 동작구 동작대로 108-2" },
  { title: "이수역 7호선", detail: "서울 동작구 동작대로 105-1" },
  { title: "이수역 7호선", detail: "서울 동작구 동작대로 105-1" },
  { title: "이수역 7호선", detail: "서울 동작구 동작대로 105-1" },
  { title: "이수역 7호선", detail: "서울 동작구 동작대로 105-1" },
  { title: "이수역 7호선", detail: "서울 동작구 동작대로 105-1" },
  { title: "이수역 7호선", detail: "서울 동작구 동작대로 105-1" },
];

const LocationStep = ({ onNext }: LocationStepProps) => {
  const [input, setInput] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("이수");

  const handleSearch = () => {
    if (input.trim()) {
      setSearchKeyword(input.trim());
    }

    // TODO: API 통신
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // 임시
  const filteredData = dummyData.filter((item) => item.title.includes(searchKeyword));

  const highlightText = (text: string, keyword: string) => {
    if (!keyword) return text;

    const index = text.indexOf(keyword);
    if (index === -1) return text;

    return (
      <>
        {text.slice(0, index)}
        <span className="text-blue-800">{text.slice(index, index + keyword.length)}</span>
        {text.slice(index + keyword.length)}
      </>
    );
  };

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-title5">원하는 지역을 알려주세요</h1>
      <div className="relative">
        <input
          className="w-full appearance-none border-b-[2px] border-gray-500-alternative bg-transparent pb-2 pt-2 text-subtitle2 outline-none placeholder:text-subtitle1"
          placeholder="지역, 지하철역, 단지, 건물명을 검색"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Image
          src={SearchIcon}
          alt="검색"
          className="absolute right-0 top-2"
          onClick={handleSearch}
        />
      </div>
      {searchKeyword && (
        <div className="flex flex-col gap-4">
          <div className="text-body2 text-gray-800">검색결과 ({filteredData.length})</div>
          <ul className="flex h-[calc(100vh-342px)] flex-col gap-[6px] overflow-y-auto">
            {filteredData.map((item, idx) => (
              <li key={idx} className="border-b-[0.5px] border-gray-200 py-[10px]">
                <div className="text-body1">{highlightText(item.title, searchKeyword)}</div>
                <div className="text-body2">{item.detail}</div>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="absolute bottom-3 left-1/2 w-full -translate-x-1/2 transform px-5">
        <Button onClick={onNext} disabled={input.length === 0}>
          다음
        </Button>
      </div>
    </div>
  );
};

export default LocationStep;
