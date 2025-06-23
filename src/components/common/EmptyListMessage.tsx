interface EmptyListMessageProps {
  message: string;
  className?: string;
}

const EmptyListMessage = ({ message, className = "" }: EmptyListMessageProps) => {
  return (
    <div className={`flex py-6 w-full items-center justify-center ${className}`}>
      <p className="h-[25px] text-subtitle1 text-black">{message}</p>
    </div>
  );
};

export default EmptyListMessage;
