import React from "react";
import Link from "next/link";

import { SheetFooter } from "../ui/sheet";
import { useUserInfoStore } from "@/stores/useUserInfoStore";

const SideBarFooter = () => {
  const { user } = useUserInfoStore();

  return (
    <SheetFooter
      className="absolute -bottom-1 left-0 right-0 px-5 py-6"
      style={{
        background: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 44%)",
        paddingTop: "40px",
      }}
    >
      <div className="flex flex-row items-center justify-between py-[10px]">
        <div className="flex items-center gap-2">
          {user?.profileImage ? (
            <img
              src={user.profileImage}
              alt="프로필 이미지"
              className="h-8 w-8 rounded-full object-cover"
            />
          ) : (
            <img src="/icons/base-user-img.svg" alt="프로필 이미지" />
          )}
          <span className="text-title3">{user?.nickname}님</span>
        </div>
        <Link
          href={"/mypage"}
          className="w-[76px] rounded-lg border-[1px] border-blue-100 bg-blue-50 py-1 text-center text-caption1 text-blue-800-primary"
        >
          내 프로필
        </Link>
      </div>
    </SheetFooter>
  );
};

export default React.memo(SideBarFooter);
