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
  const [searchKeyword, setSearchKeyword] = useState("");

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

  return (
    <div className="relative flex h-full flex-col gap-5">
      <h1 className="text-[22px] font-medium">원하는 지역을 알려주세요</h1>
      <div className="relative">
        <input
          className="w-full appearance-none border-b-[1px] border-gray-500 bg-transparent pb-2 pt-2 outline-none placeholder:text-[20px]"
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
        <div className="flex flex-col gap-4 overflow-hidden">
          <div className="text-body2 text-gray-800">검색결과 ({filteredData.length})</div>
          <ul className="flex h-[270px] flex-col gap-[6px] overflow-y-auto">
            {filteredData.map((item, idx) => (
              <li key={idx} className="py-[10px]">
                <div className="text-body1">{item.title}</div>
                <div className="text-body2">{item.detail}</div>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="absolute bottom-4 w-full">
        <Button onClick={onNext} disabled={input.length === 0}>
          다음
        </Button>
      </div>
    </div>
  );
};

export default LocationStep;
