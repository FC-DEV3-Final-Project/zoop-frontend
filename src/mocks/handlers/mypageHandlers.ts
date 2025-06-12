import { http, HttpResponse } from "msw";

export const mypageHandlers = [
  http.get("/api/mypage/:id/user-info", ({ params }) => {
    // params.id를 활용할 수도 있음
    return HttpResponse.json(
      {
        account: {
          email: "kakao_user@example.com",
          nickname: "지윤",
          profileImage: `https://api.dicebear.com/7.x/miniavs/png?seed=${params.id}`,
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
