interface CustomToastProps {
  message: string;
  onClickAction?: () => void;
  actionText?: string;
  type?: "success" | "error";
}

const CustomToast = ({
  message,
  onClickAction,
  actionText,
  type = "success",
}: CustomToastProps) => {
  const bgClass = type === "success" ? "bg-gray-950-dark" : "bg-red-700";
  const textClass = type === "success" ? "text-white" : "text-red-100";

  return (
    <div
      className={`flex w-full items-center rounded-lg px-3 py-3 text-sm font-medium shadow-md ${bgClass} ${textClass}`}
    >
      <span className="flex-grow">{message}</span>
      {actionText && onClickAction && (
        <button
          onClick={onClickAction}
          className="cursor-pointer border-0 bg-transparent font-bold text-blue-400 focus:outline-none"
        >
          {actionText}
        </button>
      )}
    </div>
  );
};

export default CustomToast;
