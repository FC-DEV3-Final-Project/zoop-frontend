import { http, HttpResponse } from "msw";

export const commonHandlers = [
  http.get("/mypage/check-user-nickname", ({ request }) => {
    const url = new URL(request.url);
    const nickname = url.searchParams.get("nickname");

    // 테스트를 위해 'test' 닉네임만 중복으로 처리
    const isDuplicated = nickname === "test";

    return HttpResponse.json(
      {
        isDuplicated,
        status: 200,
        message: "요청이 정상적으로 처리되었습니다.",
      },
      { status: 200 },
    );
  }),
];
