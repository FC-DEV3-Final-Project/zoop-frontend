// import { HttpResponse, http } from "msw";
import { commonHandlers } from "./commonHandlers";
import { mypageHandlers } from "./mypage/mypageIndex";
import { detailHandlers } from "./property/detailHandler";
import { reviewHandlers } from "./property/reviewHandlers";
import realEstateInfoHandlers from "./real-estate/realEstateInfoHandlers";

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
  ...commonHandlers,
  ...mypageHandlers,
  ...detailHandlers,
  ...reviewHandlers,
  ...realEstateInfoHandlers,
  // ...다른 핸들러
];
