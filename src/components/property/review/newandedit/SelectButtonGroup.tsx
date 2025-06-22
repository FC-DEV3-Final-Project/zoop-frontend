// SelectButtonGroup.tsx

interface Option<T extends string> {
  label: string;
  value: T;
}

interface SelectButtonGroupProps<T extends string> {
  options: Option<T>[];
  selected: T;
  onChange: (value: T) => void;
}

const SelectButtonGroup = <T extends string>({
  options,
  selected,
  onChange,
}: SelectButtonGroupProps<T>) => {
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
};

export default SelectButtonGroup;
