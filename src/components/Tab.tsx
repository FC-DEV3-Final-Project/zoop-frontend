type TabOption = {
  label: string;
  value: string;
};

type TabProps = {
  tabOptions: TabOption[];
  selected: string;
  onChange: (value: string) => void;
};

export const Tab = ({ tabOptions, selected, onChange }: TabProps) => {
  const widthClass = tabOptions.length === 2 ? "w-1/2" : "w-1/3";

  return (
    <div className="flex w-full max-w-[600px]">
      {tabOptions.map((tab) => {
        const isActive = selected === tab.value;

        return (
          <button
            key={tab.value}
            onClick={() => onChange(tab.value)}
            className={`
              ${widthClass} h-[50px] py-[14px] px-[10px]
              flex justify-center items-center gap-[10px]
              cursor-pointer border-b-2
              ${isActive
                ? "bg-[#EDF0FD] text-[#204AE5] border-[#204AE5] text-title4"
                : "bg-[#F7F7F7] text-[#32373E] border-transparent text-subtitle3"
              }
            `}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};
