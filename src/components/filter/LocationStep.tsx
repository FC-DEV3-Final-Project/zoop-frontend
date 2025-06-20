import React, { useEffect, useState } from "react";
import Image from "next/image";

import { Button } from "../ui/button";
import SearchIcon from "../../../public/icons/search.svg";
import { highlightSearchKeyword } from "@/utils/chat/highlightSearchKeyword";

interface LocationStepProps {
  onNext: () => void;
  savedSearchKeyword?: string;
  onSearchKeywordChange: (value: string) => void;
}

// 임시
const dummyData = [
  { id: "1", title: "이수역 7호선", detail: "서울 동작구 동작대로 105-2" },
  { id: "2", title: "이수역 7호선", detail: "서울 동작구 동작대로 104-2" },
  { id: "3", title: "이수역 7호선", detail: "서울 동작구 동작대로 105-2" },
  { id: "4", title: "이수역 7호선", detail: "서울 동작구 동작대로 108-2" },
  { id: "5", title: "이수역 7호선", detail: "서울 동작구 동작대로 105-1" },
  { id: "6", title: "이수역 7호선", detail: "서울 동작구 동작대로 105-1" },
  { id: "7", title: "이수역 7호선", detail: "서울 동작구 동작대로 105-1" },
  { id: "8", title: "이수역 7호선", detail: "서울 동작구 동작대로 105-1" },
  { id: "9", title: "이수역 7호선", detail: "서울 동작구 동작대로 105-1" },
  { id: "10", title: "이수역 7호선", detail: "서울 동작구 동작대로 105-1" },
];

const LocationStep = ({ onNext, savedSearchKeyword, onSearchKeywordChange }: LocationStepProps) => {
  const [input, setInput] = useState(savedSearchKeyword || "");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  useEffect(() => {
    setSelectedLocation("");
  }, [searchKeyword]);

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
          className="absolute right-0 top-2 cursor-pointer"
          onClick={handleSearch}
        />
      </div>
      {searchKeyword && (
        <div className="flex flex-col gap-4">
          <div className="text-body2 text-gray-800">검색결과 ({filteredData.length})</div>
          <div className="h-[calc(100vh-342px)] overflow-y-auto">
            {filteredData.length > 0 ? (
              <ul className="flex flex-col">
                {filteredData.map((item, idx) => {
                  const isSelected = selectedLocation === item.id;

                  return (
                    <li
                      key={idx}
                      onClick={() => setSelectedLocation(item.id)}
                      className={`cursor-pointer border-b-[0.5px] border-gray-200 px-5 py-[10px] transition-colors ${
                        isSelected ? "bg-gray-100" : "bg-white"
                      }`}
                    >
                      <div className="text-body1">
                        {highlightSearchKeyword(item.title, searchKeyword)}
                      </div>
                      <div className="text-body2">{item.detail}</div>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-2 whitespace-nowrap text-center">
                <h1 className="text-subtitle1">원하는 검색 결과가 없으신가요?</h1>
                <p className="text-body2 text-gray-700">
                  철자나 띄어쓰기를 확인하거나, <br />
                  인근 지역으로 검색해보세요!
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="absolute bottom-3 left-1/2 w-full -translate-x-1/2 transform px-5">
        <Button
          onClick={() => {
            onSearchKeywordChange(searchKeyword);
            onNext();
          }}
          disabled={selectedLocation === ""}
        >
          다음
        </Button>
      </div>
    </div>
  );
};

export default LocationStep;
