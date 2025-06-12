import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.dicebear.com",
      },
      {
        protocol: "https",
        hostname: "k.kakaocdn.net",
      },
      // 필요시 추가
    ],
  }
};

export default nextConfig;
