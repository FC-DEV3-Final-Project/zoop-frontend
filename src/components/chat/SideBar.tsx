import React, { useState } from "react";
import { SheetContent, SheetFooter, SheetHeader, SheetTitle } from "../ui/sheet";
import Input from "../ui/input";

const SideBar = () => {
  const [inputText, setInputText] = useState("");

  return (
    <SheetContent side="left">
      <SheetHeader className="flex flex-col gap-[30px] p-5">
        <SheetTitle>
          <div>
            <Input
              placeholder="검색"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onSend={() => {
                console.log("전송됨:", inputText);
                setInputText("");
              }}
            />
          </div>
        </SheetTitle>
        <div className="text-title4 text-blue-800-primary">새로운 대화 시작하기</div>
      </SheetHeader>
      <div>히스토리 목록</div>
      <SheetFooter>
        <div>내 프로필</div>
      </SheetFooter>
    </SheetContent>
  );
};

export default SideBar;
