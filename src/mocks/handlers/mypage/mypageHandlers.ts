import { mypageHomeHandlers } from "./mypageHomeHandlers";
import { postsHandlers } from "./postsHandlers";

export const mypageHandlers = [...mypageHomeHandlers, ...postsHandlers];
