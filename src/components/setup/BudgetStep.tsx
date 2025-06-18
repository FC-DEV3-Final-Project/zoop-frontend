import React, { useState } from "react";

import { Button } from "../ui/button";
import AmountQuickSelect from "./AmountQuickSelect";
import { cn } from "@/lib/utils";
import {
  parseKoreanMoneyToNumber,
  formatNumberWithComma,
  formatMoneyToKoreanUnit,
} from "@/utils/budget";

interface BudgetStepProps {
  onNext: () => void;
}

const MONTHLY_RENT_DEPOSIT_OPTIONS = ["1억", "5천만", "1천만", "5백만", "1백만"]; // 월세용 보증금
const MONTHLY_RENT_PRICE_OPTIONS = ["1백만", "50만", "10만", "5만", "1만"]; // 월세
const LEASE_DEPOSIT_OPTIONS = ["5억", "1억", "5천만", "1천만", "5백만"]; // 전세/매매용 보증금

const BudgetStep = ({ onNext }: BudgetStepProps) => {
  const [firstAmount, setFirstAmount] = useState("0"); // 보증금, 전세가, 매매가
  const [secondAmount, setSecontAmount] = useState("0"); // 월세

  const [selectedTradeType, setSelectedTradeType] = useState<"월세" | "매매" | "전세">("매매"); // 임시

  // 임시
  const [focusedField, setFocusedField] = useState<"firstAmount" | "secondAmount">("firstAmount");

  const handleAmountQuickSelectClick = (money: string) => {
    const amount = parseKoreanMoneyToNumber(money);

    if (focusedField === "firstAmount") {
      const current = parseInt(firstAmount.replace(/,/g, ""), 10) || 0;
      setFirstAmount(formatNumberWithComma(String(current + amount)));
    } else if (focusedField === "secondAmount") {
      const current = parseInt(secondAmount.replace(/,/g, ""), 10) || 0;
      setSecontAmount(formatNumberWithComma(String(current + amount)));
    }
  };

  // 입력값 직접 입력 시 콤마 자동 적용
  const handleInputWithComma = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    setter(formatNumberWithComma(e.target.value));
  };

  return (
    <div className="flex h-full flex-col gap-5">
      <h1 className="text-title5">생각해 둔 예산을 알려주세요</h1>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <div className="relative">
            <label className="text-subtitle2 text-gray-800">
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
            <div className="mt-1 flex w-full justify-start text-subtitle3 text-gray-800">
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
              <label className="text-subtitle2 text-gray-800">{selectedTradeType}</label>
              <input
                className={cn(
                  "w-full appearance-none border-b-[2px] bg-transparent py-2 text-title7 outline-none",
                  focusedField === "secondAmount"
                    ? "border-blue-800-primary"
                    : "border-gray-500-alternative",
                )}
                value={secondAmount}
                onChange={(e) => handleInputWithComma(e, setSecontAmount)}
                onFocus={() => setFocusedField("secondAmount")}
              />
              <div className="absolute right-0 top-8 text-title7">만원</div>
              <div className="mt-1 flex w-full justify-start text-subtitle3 text-gray-800">
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

      <div className="absolute bottom-3 left-1/2 w-full -translate-x-1/2 transform px-5">
        <Button
          onClick={onNext}
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
