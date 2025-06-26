import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// 로그인 하지 않아도 되는 공개 페이지
const publicRoutes = ["/login"];
// 로그인해야 접근 가능한 보호 페이지
const protectedRoutes = ["/chat", "/filter", "/mypage", "/property"];

export function middleware(req: NextRequest) {
  const token = req.cookies.get("ACCESS_TOKEN");
  const currentPath = req.nextUrl.pathname;

  // 루트 경로("/") 접근 시 로그인 여부에 따라 리다이렉트 처리
  if (currentPath === "/") {
    if (token) {
      return NextResponse.redirect(new URL("/", req.url));
    } else {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // 로그아웃 상태에서 보호 페이지 접근 시 로그인 페이지로 리다이렉트
  if (!token && protectedRoutes.includes(currentPath)) {
    const loginUrl = req.nextUrl.clone();
    loginUrl.pathname = "/login";

    return NextResponse.redirect(loginUrl);
  }

  // 로그인 상태에서 공개 페이지 접근 시 홈으로 리다이렉트
  if (token && publicRoutes.includes(currentPath)) {
    const homeUrl = req.nextUrl.clone();
    homeUrl.pathname = "/";

    return NextResponse.redirect(homeUrl);
  }

  // x-pathname 헤더 추가
  const reqHeaders = new Headers(req.headers);
  reqHeaders.set("x-pathname", currentPath);

  return NextResponse.next({
    request: {
      headers: reqHeaders,
    },
  });
}
