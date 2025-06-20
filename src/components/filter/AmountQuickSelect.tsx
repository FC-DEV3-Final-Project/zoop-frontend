import React from "react";

const AmountQuickSelect = ({ amount, onClick }: { amount: string; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="w-[56px] whitespace-nowrap rounded-[20px] border-[1px] border-blue-800 py-[2px] text-body2 text-blue-800-primary"
    >
      +{amount}
    </button>
  );
};

export default AmountQuickSelect;
