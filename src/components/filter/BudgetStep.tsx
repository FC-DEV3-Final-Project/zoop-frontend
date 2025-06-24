import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
import AmountQuickSelect from "./AmountQuickSelect";
import {
  parseKoreanMoneyToNumber,
  formatNumberWithComma,
  formatMoneyToKoreanUnit,
} from "@/utils/filter/budget";

import { RealEstateType, RealEstateTypeCode, TradeType, TradeTypeCode } from "@/types/filter";
import PropertySearchLoading from "./PropertySearchLoading";
import { useCreateChatMutation } from "@/queries/chat/useCreateChatMutation";
import { useSetFilterMutation } from "@/queries/filter/useSetFilterMutation";
import { fetchChatResponse, useChatResponseQuery } from "@/queries/chat/useChatResponseQuery";

interface BudgetStepProps {
  stepData: {
    place: {
      selectedPlace: {
        x: string;
        y: string;
        bCode: string;
        hCode: string;
        placeName: string;
      };
      tradeTypeCode: TradeTypeCode;
      realEstateTypeCode: RealEstateTypeCode[];
    };
    tradeType: TradeType[];
    realEstateType: RealEstateType[];
  };
}

const MONTHLY_RENT_DEPOSIT_OPTIONS = ["1억", "5천만", "1천만", "5백만", "1백만"]; // 월세용 보증금
const MONTHLY_RENT_PRICE_OPTIONS = ["1백만", "50만", "10만", "5만", "1만"]; // 월세
const LEASE_DEPOSIT_OPTIONS = ["5억", "1억", "5천만", "1천만", "5백만"]; // 전세/매매용 보증금

const BudgetStep = ({ stepData }: BudgetStepProps) => {
  const router = useRouter();
  const selectedTradeType = stepData.tradeType?.[0];

  const [firstAmount, setFirstAmount] = useState("0"); // 보증금, 전세가, 매매가
  const [secondAmount, setSecondAmount] = useState("0"); // 월세

  const { mutateAsync: createChat } = useCreateChatMutation();
  const { mutateAsync: submitFilter } = useSetFilterMutation();
  const [focusedField, setFocusedField] = useState<"firstAmount" | "secondAmount">("firstAmount");

  const [isLoading, setIsLoading] = useState(false);

  const handleAmountQuickSelectClick = (money: string) => {
    const amount = parseKoreanMoneyToNumber(money);

    if (focusedField === "firstAmount") {
      const current = parseInt(firstAmount.replace(/,/g, ""), 10) || 0;
      setFirstAmount(formatNumberWithComma(String(current + amount)));
    } else if (focusedField === "secondAmount") {
      const current = parseInt(secondAmount.replace(/,/g, ""), 10) || 0;
      setSecondAmount(formatNumberWithComma(String(current + amount)));
    }
  };

  // 입력값 직접 입력 시 콤마 자동 적용
  const handleInputWithComma = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    setter(formatNumberWithComma(e.target.value));
  };

  // 결과 확인하기 버튼 클릭 시
  const handleSubmit = async () => {
    try {
      setIsLoading(true); // 로딩 시작

      // 1. 채팅방 생성
      const newChatRoom = await createChat();
      const newChatRoomId = newChatRoom?.chatRoomId;

      // 필터 데이터 구성
      const filters = {
        x: stepData.place?.selectedPlace.x || "",
        y: stepData.place?.selectedPlace.y || "",
        bCode: stepData.place?.selectedPlace.bCode || "",
        hCode: stepData.place?.selectedPlace.hCode || "",
        placeName: stepData.place?.selectedPlace.placeName || "",
        tradeTypeName: (stepData.tradeType?.[0] as "월세" | "매매" | "전세") || "월세",
        realEstateTypeName: stepData.realEstateType || [],
        dealOrWarrantPrc: parseInt(firstAmount.replace(/,/g, ""), 10) || 0,
        rentPrice: secondAmount ? parseInt(secondAmount.replace(/,/g, ""), 10) : 0,
      };

      // 2. 필터 설정 API 호출
      const res = await submitFilter({
        chatRoomId: newChatRoomId,
        filters,
      });

      // 3. AI 응답 받기 API 호출
      await fetchChatResponse({ chatRoomId: newChatRoomId }); // 수동 호출

      // 4. 채팅방으로 이동
      router.push(`/chat/${newChatRoomId}`);
    } catch (error) {
      console.error("필터 설정 중 에러:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <PropertySearchLoading />;

  return (
    <div className="flex flex-col h-full gap-5">
      <h1 className="text-title5">생각해 둔 예산을 알려주세요</h1>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <div className="relative">
            <label className="text-gray-800 text-subtitle2">
              {selectedTradeType === "월세"
                ? "보증금"
                : selectedTradeType === "전세"
                  ? "전세가"
                  : "매매가"}
            </label>
            <input
              className={cn(
                "w-full appearance-none border-b-[2px] bg-transparent py-2 text-title7 outline-none",
                focusedField === "firstAmount"
                  ? "border-blue-800-primary"
                  : "border-gray-500-alternative",
              )}
              value={firstAmount}
              onChange={(e) => handleInputWithComma(e, setFirstAmount)}
              onFocus={() => setFocusedField("firstAmount")}
            />
            <div className="absolute right-0 top-8 text-title7">만원</div>
            <div className="flex justify-start w-full mt-1 text-gray-800 text-subtitle3">
              {formatMoneyToKoreanUnit(firstAmount)}원
            </div>
          </div>
          {focusedField === "firstAmount" && (
            <ul className="flex flex-wrap justify-center gap-2">
              {(selectedTradeType === "월세"
                ? MONTHLY_RENT_DEPOSIT_OPTIONS
                : LEASE_DEPOSIT_OPTIONS
              ).map((amount) => (
                <AmountQuickSelect
                  key={amount}
                  amount={amount}
                  onClick={() => handleAmountQuickSelectClick(amount)}
                />
              ))}
            </ul>
          )}
        </div>

        {selectedTradeType === "월세" && (
          <div className="flex flex-col gap-3">
            <div className="relative">
              <label className="text-gray-800 text-subtitle2">{selectedTradeType}</label>
              <input
                className={cn(
                  "w-full appearance-none border-b-[2px] bg-transparent py-2 text-title7 outline-none",
                  focusedField === "secondAmount"
                    ? "border-blue-800-primary"
                    : "border-gray-500-alternative",
                )}
                value={secondAmount}
                onChange={(e) => handleInputWithComma(e, setSecondAmount)}
                onFocus={() => setFocusedField("secondAmount")}
              />
              <div className="absolute right-0 top-8 text-title7">만원</div>
              <div className="flex justify-start w-full mt-1 text-gray-800 text-subtitle3">
                {formatMoneyToKoreanUnit(secondAmount)}원
              </div>
            </div>
            {focusedField === "secondAmount" && (
              <div className="flex justify-center">
                <ul className="flex flex-wrap gap-2">
                  {MONTHLY_RENT_PRICE_OPTIONS.map((amount) => (
                    <AmountQuickSelect
                      key={amount}
                      amount={amount}
                      onClick={() => handleAmountQuickSelectClick(amount)}
                    />
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="absolute bottom-3 left-1/2 w-full max-w-[600px] -translate-x-1/2 transform px-5">
        <Button
          onClick={handleSubmit}
          disabled={
            selectedTradeType === "월세"
              ? firstAmount === "0" || secondAmount === "0"
              : firstAmount === "0"
          }
        >
          결과 확인하기
        </Button>
      </div>
    </div>
  );
};

export default BudgetStep;
