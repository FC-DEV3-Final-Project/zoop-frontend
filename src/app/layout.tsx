import "./globals.css";
import localFont from "next/font/local";
import type { Metadata } from "next";
import { MSWComponent } from "@/components/MSWComponent";
import Script from "next/script";
import Providers from "./providers";
import { Toaster } from "react-hot-toast";

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  weight: "100 900",
});

// window.kakao를 타입스크립트에서 인식(맴에서 사용)
declare global {
  interface Window {
    kakao: any;
  }
}

export const metadata: Metadata = {
  title: "zoop",
  other: {
    "format-detection": "telephone=no",
  }, // 전화번호가 자동으로 <a href="tel:...">로 감싸지며 SSR/CSR 결과가 달라져 hydration 오류 발생. 방지하기 위해 format-detection 메타 태그로 자동 링크 비활성화 처리함
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={pretendard.variable}>
      <body className="font-pretendard">
        <div className="mx-auto min-h-screen w-full max-w-[600px] bg-[#f8f8f8]">
          <Script
            type="text/javascript"
            src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_JS_KEY}&autoload=false`}
            strategy="beforeInteractive"
          />
          <Providers>
            {children}
            <Toaster
              position="bottom-center"
              containerStyle={{
                bottom: "80px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "600px",
                maxWidth: "90vw",
                padding: 0, // 패딩은 여기서 제거하고 CSS에서 처리
              }}
              toastOptions={{
                className: "custom-toast",
              }}
            />
          </Providers>
        </div>
      </body>
    </html>
  );
}
