import { HttpResponse, http } from "msw";

export const handlers = [
  // //회원가입
  // http.post("/api/user", async ({ request }) => {
  //   const info = await request.json();

  //   return HttpResponse.json(info, {
  //     status: 200,
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  // }),

  //테스트
  http.get("/api/user-info", () => {
    return HttpResponse.json(
      {
        id: 1,
        name: "홍길동",
        email: "hong@kakao.com",
        profileImage: "https://api.dicebear.com/7.x/miniavs/svg?seed=1",
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
