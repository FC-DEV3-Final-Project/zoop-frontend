import React, { useState } from "react";

const ToggleCompare = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <button
      onClick={() => setEnabled((prev) => !prev)}
      className="flex items-center gap-2 text-blue-600"
    >
      <div
        className={`h-[22px] w-[40px] rounded-full p-[2px] transition-colors duration-300 ${
          enabled ? "bg-blue-600" : "bg-gray-300"
        }`}
      >
        <div
          className={`h-[18px] w-[18px] rounded-full bg-white transition-transform duration-300 ${
            enabled ? "translate-x-[18px]" : "translate-x-0"
          }`}
        />
      </div>
    </button>
  );
};

export default ToggleCompare;
