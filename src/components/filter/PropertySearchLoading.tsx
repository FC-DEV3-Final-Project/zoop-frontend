import React from "react";
import { useUserInfoStore } from "@/stores/useUserInfoStore";

const PropertySearchLoading = () => {
  const { user } = useUserInfoStore();

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="mb-10 flex h-full items-center justify-center">
        <p className="text-center text-title6">
          {user?.nickname}님의 조건에 <br /> 알맞는 매물을 찾고 있습니다
        </p>
      </div>
      {/** loading lottie */}
    </div>
  );
};

export default PropertySearchLoading;
