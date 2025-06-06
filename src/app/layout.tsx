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
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={pretendard.variable}>
      <body className="font-pretendard">
        <div className="mx-auto min-h-screen w-full max-w-[600px] bg-[#f8f8f8]">{children}</div>
      </body>
    </html>
  );
}
