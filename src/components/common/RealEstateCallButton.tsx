import { Button } from "../ui/button";
import BottomSheet from "./BottomSheet";

interface RealEstateCallButtonProps {
  phoneNumber: { label: string; value: string }[];
}

const RealEstateCallButton = ({ phoneNumber }: RealEstateCallButtonProps) => {
  const handleCall = (value: string) => {
    window.location.href = `tel:${value}`;
    close();
  };

  return (
    <BottomSheet
      trigger={
        <div className="fixed bottom-0 left-1/2 z-10 w-full max-w-[600px] -translate-x-1/2 bg-white px-5 py-3">
          <Button variant="default">공인중개사에게 전화 걸기</Button>
        </div>
      }
      title="공인중개사에게 전화 걸기"
    >
      {(close) =>
        phoneNumber.map((item, idx) => {
          return (
            <button
              key={idx}
              className={`flex h-[48px] cursor-pointer items-center justify-start px-[20px] text-left text-body1 hover:bg-gray-200`}
              onClick={() => {
                handleCall(item.value);
              }}
            >
              {item.value}
            </button>
          );
        })
      }
    </BottomSheet>
  );
};

export default RealEstateCallButton;
