import "./globals.css";
import localFont from "next/font/local";
import type { Metadata } from "next";
import { MSWComponent } from "@/components/MSWComponent";

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  weight: "100 900",
});

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
  const useMock = process.env.NEXT_PUBLIC_USE_MOCK === "true";

  return (
    <html lang="en" className={pretendard.variable}>
      <body className="font-pretendard">
        <div className="mx-auto min-h-screen w-full max-w-[600px] bg-[#f8f8f8]">
          {useMock && <MSWComponent>{children}</MSWComponent>}
          {!useMock && children}
        </div>
      </body>
    </html>
  );
}
