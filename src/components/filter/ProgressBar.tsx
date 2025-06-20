import React from "react";

const ProgressBar = ({ currentStep }: { currentStep: string }) => {
  const getProgressWidthClass = (step: string) => {
    switch (step) {
      case "1":
        return "w-1/4";
      case "2":
        return "w-2/4";
      case "3":
        return "w-3/4";
      case "4":
        return "w-full";
      default:
        return "w-0";
    }
  };

  return (
    <div className="h-[4px] w-full bg-gray-300">
      <div
        className={`h-[4px] rounded-br-[16px] rounded-tr-[16px] bg-blue-800-primary transition-all duration-300 ${getProgressWidthClass(currentStep)}`}
      />
    </div>
  );
};

export default ProgressBar;
