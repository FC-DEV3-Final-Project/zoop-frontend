"use client";

interface Option {
  label: string;
  value: string;
}

interface SelectButtonGroupProps {
  options: Option[];
  selected: string;
  onChange: (value: string) => void;
}

export default function SelectButtonGroup({ options, selected, onChange }: SelectButtonGroupProps) {
  return (
    <div className="flex gap-[10px]">
      {options.map((opt) => {
        const isSelected = selected === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`flex h-8 items-center justify-center rounded-[20px] px-[13px] py-[6px] transition ${
              isSelected
                ? "border border-blue-800-primary bg-blue-050-bg text-caption1 text-blue-800-primary"
                : "border border-gray-100 bg-gray-100 text-body2 text-black"
            } `}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
