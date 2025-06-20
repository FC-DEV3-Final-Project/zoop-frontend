// 카카오 API 응답 타입
interface KakaoPlace {
  id: string; // 장소 ID
  place_name: string; // 장소명, 업체명
  address_name: string; // 전체 지번 주소
  road_address_name: string; // 전체 도로명 주소
  x: string; // 경도
  y: string; // 위도
}

interface KakaoSearchResponse {
  meta: {
    total_count: number; // 검색어에 검색된 문서 수
    pageable_count: number; // total_count 중 노출 가능 문서 수 (최대: 45)
  };
  documents: KakaoPlace[];
}

const KAKAO_REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;

// 키워드 기반 검색 결과 반환 API
export const getSearchPlaces = async (
  searchKeyword: string,
  options?: {
    page?: number;
    size?: number;
  },
) => {
  const params = new URLSearchParams({
    query: searchKeyword,
    size: "15", // 한 페이지에 보여질 문서의 최대 갯수
    ...(options?.page && { page: options.page.toString() }),
  });

  const response = await fetch(`https://dapi.kakao.com/v2/local/search/keyword.json?${params}`, {
    headers: {
      Authorization: `KakaoAK ${KAKAO_REST_API_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error(`카카오 API 오류: ${response.status}`);
  }

  const data: KakaoSearchResponse = await response.json();
  return data;
};

// 행정구역 정보 타입
interface RegionInfo {
  region_type: string; // H(행정동) 또는 B(법정동)
  code: string; // region 코드
}

interface RegionResponse {
  meta: {
    total_count: number; // 검색어에 검색된 문서 수
  };
  documents: RegionInfo[]; // 응답 결과
}

// 좌표로 행정구역 정보 가져오는 API
export const getRegionInfo = async (
  x: string,
  y: string,
): Promise<{ bCode: string; hCode: string }> => {
  const response = await fetch(
    `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${x}&y=${y}`,
    {
      headers: {
        Authorization: `KakaoAK ${KAKAO_REST_API_KEY}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error(`행정구역 정보 조회 실패: ${response.status}`);
  }

  const data: RegionResponse = await response.json();

  // 법정동과 행정동 정보 찾기
  const beopjeongDong = data.documents.find((doc) => doc.region_type === "B"); // 법정동
  const haengjeongDong = data.documents.find((doc) => doc.region_type === "H"); // 행정동

  return {
    bCode: beopjeongDong?.code || "",
    hCode: haengjeongDong?.code || "",
  };
};
