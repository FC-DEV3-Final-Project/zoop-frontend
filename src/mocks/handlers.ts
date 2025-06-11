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
  http.get("/api/user", () => {
    return HttpResponse.json(
      {
        id: 1,
        name: "홍길동",
        email: "hong@example.com",
        createdAt: new Date().toISOString(),
        profile: {
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
          bio: "안녕하세요! 반갑습니다.",
        },
        stats: {
          posts: 15,
          followers: 120,
          following: 45,
        },
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
