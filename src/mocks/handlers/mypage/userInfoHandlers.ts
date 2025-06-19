import { http, HttpResponse } from "msw";

export const userInfoHandlers = [
  // 유저 정보 조회
  http.get("/mypage/account", () => {
    return HttpResponse.json(
      {
        account: {
          email: "kakao_user@example.com",
          nickname: "지윤",
          profileImageUrl: `https://api.dicebear.com/7.x/miniavs/png?seed=1`,
        },
        message: "요청이 정상적으로 처리되었습니다.",
      },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }),

];