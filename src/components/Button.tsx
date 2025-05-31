import classNames from "classnames";
import React from "react";

interface ButtonType {
  type?: "full" | "small";
  children: React.ReactNode;
  disabled: boolean;
}
const Button = ({ type = "full", children, disabled, ...props }: ButtonType) => {
  const baseStyle = "py-3 rounded-lg font-bold cursor-pointer";
  const typeStyle =
    type === "full"
      ? "bg-[#204AE5] text-white hover:bg-blue-700 w-full text-lg cursor-pointer"
      : ""; // small 타입 스타일

  const disabledStyle = "opacity-50 cursor-not-allowed text-[#888] bg-[#EDEDED]";

  return (
    <button
      className={classNames(baseStyle, typeStyle, disabled && disabledStyle)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
