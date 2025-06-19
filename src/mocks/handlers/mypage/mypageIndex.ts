import { mypageHomeHandlers } from "./mypageHomeHandlers";
import { userInfoHandlers } from "./userInfoHandlers";
import { postsHandlers } from "./postsHandlers";

export const mypageHandlers = [
  ...mypageHomeHandlers,
  ...userInfoHandlers,
  ...postsHandlers,
];
