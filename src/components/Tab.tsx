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
            className={` ${widthClass} flex h-[50px] cursor-pointer items-center justify-center gap-[10px] border-b-2 px-[10px] py-[14px] ${
              isActive
                ? "border-blue-800-primary bg-blue-050-bg text-title4 text-blue-800-primary"
                : "border-transparent bg-gray-100 text-subtitle3 text-gray-900"
            } `}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};
