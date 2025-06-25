import React from "react";
import { useUserInfoStore } from "@/stores/useUserInfoStore";
import LoadingDots from "../common/LoadingDots";

const PropertySearchLoading = () => {
  const { user } = useUserInfoStore();

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex flex-col items-center justify-center h-full gap-5 mb-10">
        <LoadingDots />
        <p className="text-center text-title6">
          {user?.nickname}님의 조건에 <br /> 알맞는 매물을 찾고 있습니다
        </p>
      </div>
    </div>
  );
};

export default PropertySearchLoading;
