const LoadingDots = () => {
  return (
    <div className="flex items-center space-x-1">
      <span className="h-2 w-2 animate-bounce rounded-full bg-blue-800-primary [animation-delay:0ms]" />
      <span className="h-2 w-2 animate-bounce rounded-full bg-blue-800-primary [animation-delay:150ms]" />
      <span className="h-2 w-2 animate-bounce rounded-full bg-blue-800-primary [animation-delay:300ms]" />
    </div>
  );
};

export default LoadingDots;
