import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "api.dicebear.com",
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "k.kakaocdn.net",
    //   },
    //   {
    //     protocol: "https",
    //     hostname: "cdn.example.com",
    //   },
    //   // 필요시 추가
    // ],
    domains: [
      "k.kakaocdn.net",
      "api.dicebear.com",
      "cdn.example.com",
      "43.201.121.201",
      "landthumb-phinf.pstatic.net",
    ],
  },
};

export default nextConfig;
