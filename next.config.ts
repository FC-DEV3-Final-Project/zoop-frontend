import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "api.dicebear.com", // 예시: dicebear 아바타
      "k.kakaocdn.net", // 예시: 카카오 프로필 이미지
      // 필요한 도메인 추가
    ],
  },
};

export default nextConfig;
