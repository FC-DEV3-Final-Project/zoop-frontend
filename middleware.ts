import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  // 요청의 쿠키 중 accessToken 값을 가져옴
  const accessToken = req.cookies.get("accessToken")?.value;

  const isLoggedIn = !!accessToken;

  const protectedPaths = ["/chat", "/filter", "/mypage", "/property"];
  const isProtected = protectedPaths.some((path) => req.nextUrl.pathname.startsWith(path));

  // 로그인 안 되어 있으면 → /login으로 리디렉트
  if (isProtected && !isLoggedIn) {
    const loginUrl = new URL("/login", req.url); // login URL을 새로 만듦
    return NextResponse.redirect(loginUrl);
  }

  // 로그인한 유저가 /login으로 접근하면 → 홈으로 리디렉트
  if (req.nextUrl.pathname === "/login" && isLoggedIn) {
    const homeUrl = new URL("/", req.url);
    return NextResponse.redirect(homeUrl);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/chat/:path*", "/filter/:path*", "/mypage/:path*", "/property/:path*", "/login"],
};
