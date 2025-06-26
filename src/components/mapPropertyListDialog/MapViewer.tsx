import React, { useEffect, useRef } from "react";

type Position = {
  order?: number;
  propertyId?: string | number;
  latitude: number;
  longitude: number;
};

interface MapViewerProps {
  markerPoint: Position[];
}

const MapViewer = ({ markerPoint }: MapViewerProps) => {
  const mapElement = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!window.kakao || !window.kakao.maps) return;

      window.kakao.maps.load(() => {
        const container = mapElement.current;
        if (!container) return;

        const map = new window.kakao.maps.Map(container, {
          center: new window.kakao.maps.LatLng(37.5665, 126.978),
          level: 3,
        });

        markerPoint.forEach((item, i) => {
          const latlng = new window.kakao.maps.LatLng(item.latitude, item.longitude);

          const markerImg =
            "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png";

          const markerImgSize = new window.kakao.maps.Size(36, 37);

          const imgOptions = {
            spriteSize: new window.kakao.maps.Size(36, 691),
            spriteOrigin: new window.kakao.maps.Point(0, i * 46 + 10),
            offset: new window.kakao.maps.Point(13, 37),
          };

          const markerImage = new window.kakao.maps.MarkerImage(
            markerImg,
            markerImgSize,
            imgOptions,
          );

          new window.kakao.maps.Marker({
            map,
            position: latlng,
            image: markerImage,
          });
        });
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [markerPoint]);

  return <div ref={mapElement} id="map" className="h-full w-full" />;
};

export default MapViewer;
