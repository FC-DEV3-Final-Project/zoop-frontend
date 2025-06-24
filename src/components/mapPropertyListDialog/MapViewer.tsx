import React, { useEffect, useRef } from "react";

type Position = {
  order?: number; // 선택 사항
  propertyId?: string | number; // 선택 사항
  latitude: number;
  longitude: number;
};

interface MapViewerProps {
  markerPoint: Position[];
}

const MapViewer = ({ markerPoint }: MapViewerProps) => {
  const mapElement = useRef<HTMLDivElement | null>(null);
  console.log("markerPoint:::확인::", markerPoint);

  useEffect(() => {
    if (!open) return;

    // kakao 객체가 브라우저에서 존재하는지 확인
    const { kakao } = window;
    if (!kakao) return;

    // dialog가 완전히 그려진 뒤 실행되도록 지연
    const timeoutId = setTimeout(() => {
      kakao.maps.load(() => {
        if (!mapElement.current) return;
        // 지도 생성
        const map = new kakao.maps.Map(mapElement.current!, {
          center: new kakao.maps.LatLng(37.5665, 126.978), // 지도의 중심좌표
          level: 9,
        });

        // positions 배열의 각 좌표마다 숫자 마커 생성
        markerPoint.forEach((item, i) => {
          const latlng = new window.kakao.maps.LatLng(item.latitude, item.longitude);

          // 숫자 마커로 사용할 img URL (스프라이트 방식)
          const markerImg =
            "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png";

          // 마커 이미지 전체 사이즈
          const markerImgSize = new window.kakao.maps.Size(36, 37);

          // 스프라이트 이미지에서 몇 번째 숫자를 쓸지 계산
          const imgOptions = {
            spriteSize: new window.kakao.maps.Size(36, 691), // 전체 스프라이트 크기
            spriteOrigin: new window.kakao.maps.Point(0, i * 46 + 10), // 현재 index의 숫자 위치
            offset: new window.kakao.maps.Point(13, 37), // 마커 위치 보정
          };
          // 마커 이미지 객체 생성
          const markerImage = new window.kakao.maps.MarkerImage(
            markerImg,
            markerImgSize,
            imgOptions,
          );

          // 마커 생성 및 지도에 표시
          new window.kakao.maps.Marker({
            map,
            position: latlng,
            image: markerImage,
          });
        });
      });
    }, 100); // 100ms 후에 실행
  }, [markerPoint]);
  return <div ref={mapElement} id="map" className="h-full w-full" />;
};

export default MapViewer;
