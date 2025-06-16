// import { HttpResponse, http } from "msw";
import { mypageHandlers } from "./mypageHandlers";
import { reviewHandlers } from "./property/reviewHandlers";

export const handlers = [
  //테스트
  // http.get("/api/user-info", () => {
  //   return HttpResponse.json(
  //     {
  //       id: 1,
  //       name: "홍길동",
  //       email: "hong@kakao.com",
  //       profileImage: "https://api.dicebear.com/7.x/miniavs/svg?seed=1",
  //     },
  //     {
  //       status: 200,
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     },
  //   );
  // }),
  ...mypageHandlers,
  ...reviewHandlers,
  // ...다른 핸들러
];
