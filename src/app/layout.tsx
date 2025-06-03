import "./globals.css";
import localFont from "next/font/local";
import type { Metadata } from "next";
import Header from "@/layout/Header";

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "zoop",
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
        <div className="relative mx-auto flex h-screen w-full max-w-[600px] flex-col bg-gray-100">
          <Header />
          <main className="h-full pt-[64px]">{children}</main>
        </div>
      </body>
    </html>
  );
}
