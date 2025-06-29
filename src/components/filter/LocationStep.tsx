import React, { useEffect, useState } from "react";
import Image from "next/image";

import { highlightSearchText } from "@/utils/common/highlightSearchText";

import { Button } from "../ui/button";
import SearchIcon from "../../../public/icons/search.svg";

import { getRegionInfo, getSearchPlaces } from "@/apis/filter/kakao/location";
import { LocationStepData, SelectedPlaceInfo } from "@/types/filter";

interface LocationStepProps {
  onNext: () => void;
  savedLocationData: Partial<LocationStepData>;
  onLocationDataChange: (data: Partial<LocationStepData>) => void;
}

// 카카오 API 응답 타입
interface KakaoPlace {
  id: string; // 장소 ID
  place_name: string; // 장소명, 업체명
  address_name: string; // 전체 지번 주소
  road_address_name: string; // 전체 도로명 주소
  x: string; // 경도
  y: string; // 위도
}

const LocationStep = ({ onNext, savedLocationData, onLocationDataChange }: LocationStepProps) => {
  const [input, setInput] = useState(savedLocationData.searchKeyword || "");
  const [searchKeyword, setSearchKeyword] = useState(savedLocationData.searchKeyword || "");
  const [selectedPlaceInfo, setSelectedPlaceInfo] = useState<SelectedPlaceInfo | null>(
    savedLocationData.selectedPlace || null,
  );
  const [searchResults, setSearchResults] = useState<KakaoPlace[]>(
    savedLocationData.searchResults || [],
  );
  const [isLoading, setIsLoading] = useState(false); // 임시
  const [error, setError] = useState<string | null>(null); // 임시

  useEffect(() => {
    // 현재 검색어와 저장된 검색어가 다를 때만 초기화
    if (searchKeyword !== savedLocationData.searchKeyword) {
      setSelectedPlaceInfo(null);
    }
  }, [savedLocationData.searchKeyword, searchKeyword]);

  // Enter 또는 검색 아이콘 클릭 시 실행되는 함수
  const handleSearch = async () => {
    if (!input.trim()) return;

    const currentInput = input.trim();

    setIsLoading(true);
    setError(null);

    try {
      const firstPage = await getSearchPlaces(currentInput);

      // 나머지 페이지들 가져오기 (첫 페이지는 이미 가져왔으므로 2페이지부터)
      const pagePromises = [];
      for (let i = 2; i <= 3; i++) {
        pagePromises.push(getSearchPlaces(currentInput, { page: i }));
      }

      const remainingPages = await Promise.all(pagePromises);
      // 모든 결과 합치기
      const allResults = [
        ...firstPage.documents,
        ...remainingPages.flatMap((page) => page.documents),
      ];

      const filteredResults = allResults.filter((place) =>
        place.place_name.toLowerCase().includes(currentInput.toLowerCase()),
      );

      setSearchResults(filteredResults);
      setSearchKeyword(currentInput);
    } catch (err) {
      console.error("검색 중 오류 발생:", err);
      setError(err instanceof Error ? err.message : "검색 중 오류가 발생했습니다.");

      setSearchKeyword(currentInput);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // 주소를 ~동까지만 잘라서 반환하는 함수
  const getSimpleAddress = (place: KakaoPlace) => {
    const address = place.address_name; // 지번 주소 사용

    // 주소를 공백으로 분리
    const addressParts = address.split(" ");

    // "동"으로 끝나는 부분까지 찾기
    const dongIndex = addressParts.findIndex((part) => part.endsWith("동"));

    if (dongIndex !== -1) {
      // "동"까지의 주소 부분만 반환
      return addressParts.slice(0, dongIndex + 1).join(" ");
    }

    // "동"이 없는 경우 시/군/구까지만 표시
    if (addressParts.length >= 3) {
      return addressParts.slice(0, 3).join(" ");
    }

    return address;
  };

  // 선택된 장소 정보 저장하는 함수
  const handleLocationSelect = async (place: KakaoPlace) => {
    try {
      const regionInfo = await getRegionInfo(place.x, place.y);

      const placeInfo: SelectedPlaceInfo = {
        x: place.x,
        y: place.y,
        bCode: regionInfo.bCode,
        hCode: regionInfo.hCode,
        placeName: place.place_name,
      };

      setSelectedPlaceInfo(placeInfo);
    } catch (error) {
      console.error("행정구역 정보 조회 실패:", error);
      setSelectedPlaceInfo(null);
    }
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
          disabled={isLoading}
        />
        <Image
          src={SearchIcon}
          alt="검색"
          className="absolute right-0 top-2 cursor-pointer"
          onClick={handleSearch}
        />
      </div>

      {/* 임시 로딩 상태 */}
      {isLoading && <div className="text-center text-body2 text-gray-600">검색 중...</div>}

      {/* 임시 에러 상태 */}
      {error && (
        <div className="rounded bg-red-50 p-3 text-center text-body2 text-red-600">{error}</div>
      )}

      {searchKeyword && !isLoading && (
        <div className="flex flex-col gap-4">
          <div className="text-body2 text-gray-800">검색결과 ({searchResults.length})</div>
          <div className="h-[calc(100vh-342px)] overflow-y-auto">
            {searchResults !== null ? (
              <ul className="flex flex-col">
                {searchResults.map((place) => {
                  const isSelected =
                    selectedPlaceInfo?.placeName === place.place_name &&
                    selectedPlaceInfo?.x === place.x &&
                    selectedPlaceInfo?.y === place.y;

                  return (
                    <li
                      key={place.id}
                      onClick={() => handleLocationSelect(place)}
                      className={`cursor-pointer rounded-lg border-b-[0.5px] border-gray-200 px-5 py-[10px] transition-colors ${
                        isSelected ? "bg-blue-050-bg" : "bg-white"
                      }`}
                    >
                      <div className="text-body1">
                        {highlightSearchText(place.place_name, searchKeyword)}
                      </div>
                      <div className="text-body2">{getSimpleAddress(place)}</div>
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

      <div className="absolute bottom-3 left-1/2 w-full max-w-[600px] -translate-x-1/2 transform bg-white px-5 py-3">
        <Button
          onClick={() => {
            onNext();
            onLocationDataChange({
              searchKeyword,
              searchResults,
              selectedPlace: selectedPlaceInfo,
            });
          }}
          disabled={selectedPlaceInfo === null}
        >
          다음
        </Button>
      </div>
    </div>
  );
};

export default LocationStep;
