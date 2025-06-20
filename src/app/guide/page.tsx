"use client";

import { useState } from "react";

import { Header } from "@/layout/Header";
import { Button } from "@/components/ui/button";
import BottomSheet from "@/components/common/BottomSheet";
import Dropdown from "@/components/common/Dropdown";
import PropertyCard from "@/components/common/PropertyCard";
import Tab from "@/components/common/Tab";
import AutoResizeTextarea from "@/components/ui/textarea";

const tabItems = [
  { label: "상세 정보", value: "detail" },
  { label: "리뷰", value: "review" },
];

const tabItems2 = [
  { label: "월세", value: "one" },
  { label: "전세", value: "two" },
  { label: "매매", value: "three" },
];

// BottomSheet 관련로직
const sortOptions = [
  { label: "가격 높은 순", value: "high" },
  { label: "가격 낮은 순", value: "low" },
  { label: "면적 넓은 순", value: "wide " },
  { label: "면적 좁은 순", value: "narrow " },
];

// BottomSheet 관련로직
const phonNumber = [
  { label: "031-271-5309", value: 312715309 },
  { label: "010-1234-1234", value: 1012341234 },
];

export default function Guide() {
  const [selectedTab, setSelectedTab] = useState(tabItems[0].value); // 항상 첫 번째 탭이 활성화된 채로 켜지길 원한다면,,
  const [selectedText, setSelectedText] = useState<{ label: string; value: string } | null>(null); // BottomSheet 관련로직
  const [message, setMessage] = useState(""); // textarea

  // BottomSheet 관련로직
  const handleSelect = (item: { label: string; value: string }) => {
    if (selectedText?.value === item.value) {
      setSelectedText(null);
    } else {
      setSelectedText(item);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-1 px-4 pt-16">
      {/** Header Section */}
      <Header bgColorClassName="bg-gray-100">
        <Header.Hamburger onHamburgerClick={() => alert("뒤로가기 클릭")} />
        <Header.Prev onPrevClick={() => alert("뒤로가기 클릭")} />
        <Header.Title>Guide</Header.Title>
        <Header.Close onCloseClick={() => alert("닫기 클릭")} />
      </Header>

      {/* textarea Section */}
      <div className="flex w-full flex-col gap-2 rounded-large border border-gray-400 p-4">
        <h1 className="text-title1">textarea</h1>
        <AutoResizeTextarea
          placeholder="메시지를 입력하세요"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onSend={() => alert("메시지 전송")}
        />
      </div>

      {/* DropDown Section */}
      <div className="flex w-full flex-col gap-2 rounded-large border border-gray-400 p-4">
        <h1 className="text-title1">DropDown</h1>
        <div className="flex justify-end">
          <Dropdown
            items={[
              {
                type: "edit",
                label: "편집하기",
                onClick: () => {
                  console.log("편집 버튼 클릭됨");
                },
              },
              {
                type: "delete",
                label: "삭제하기",
                onClick: () => {
                  console.log("삭제 버튼 클릭됨");
                },
              },
            ]}
          />
        </div>
        <Dropdown
          items={[
            {
              type: "delete",
              label: "삭제하기",

              onClick: () => {
                console.log("삭제 버튼 클릭됨");
              },
            },
          ]}
        />
      </div>

      {/* BottomSheet Section */}
      <div className="flex w-full flex-col gap-2 rounded-large border border-gray-400 p-4">
        <h1 className="text-title1">BottomSheet</h1>
        <BottomSheet
          trigger={
            <button className="flex w-max cursor-pointer items-center gap-[3px] rounded-[100px] border border-[#E4E4E4] px-3 py-1">
              공인중개사 전화 걸기
            </button>
          }
          title="전화 걸기"
        >
          {(close) =>
            phonNumber.map((item) => {
              return (
                <button
                  key={item.value}
                  className={`flex h-[48px] cursor-pointer items-center justify-start px-[20px] text-left text-body1 hover:bg-gray-200`}
                  onClick={() => {
                    console.log("선택된 항목:", item);
                    close();
                  }}
                >
                  {item.label}
                </button>
              );
            })
          }
        </BottomSheet>

        <BottomSheet
          trigger={
            <button className="flex w-max cursor-pointer items-center gap-[3px] rounded-[100px] border border-[#E4E4E4] px-3 py-1">
              {selectedText?.label ?? "AI추천 순"}
              <img src="/icons/arrow-down.svg" alt="화살표" className="h-3 w-3" />
            </button>
          }
          title="정렬 방식"
        >
          {(close) =>
            sortOptions.map((item) => {
              const isSelected = item.value === selectedText?.value;
              return (
                <button
                  key={item.value}
                  className={`flex h-[48px] cursor-pointer items-center justify-start px-[20px] text-left text-body1 hover:bg-gray-200 ${
                    isSelected ? "bg-gray-200 text-subtitle2" : ""
                  }`}
                  onClick={() => {
                    console.log("선택된 항목:", item);
                    setSelectedText(item); // 필요시 선택 항목 반영
                    handleSelect(item);
                    close();
                  }}
                >
                  {item.label}
                </button>
              );
            })
          }
        </BottomSheet>
      </div>
      {/* Color Section */}
      <div className="flex flex-col gap-4 rounded-large border border-gray-400 p-4">
        <h1 className="text-title1">Color</h1>
        {/* 흰색,검정색 */}
        <div className="flex flex-wrap">
          <div className="flex flex-col items-center gap-1">
            <p className="text-caption3">white</p>
            <p className="text-footnote text-gray-600">#FFFFFF</p>
            <div className="h-28 w-28 border border-gray-200 bg-white"></div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-caption3">black</p>
            <p className="text-footnote text-gray-600">#000000</p>
            <div className="h-28 w-28 bg-black"></div>
          </div>
        </div>
        {/* 회색 계열 */}
        <div className="flex flex-col gap-2">
          <h2 className="text-title4">Gray</h2>
          <div className="flex flex-wrap">
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">gray-050</p>
              <p className="text-footnote text-gray-600">#FCFCFC</p>
              <div className="h-28 w-28 bg-gray-050"></div>
              <p className="text-footnote text-gray-600">#FCFCFC</p>
              <div className="h-28 w-28 bg-gray-050"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">gray-100</p>
              <p className="text-footnote text-gray-600">#F8F8F8</p>
              <div className="h-28 w-28 bg-gray-100"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">gray-200</p>
              <p className="text-footnote text-gray-600">#F3F3F3</p>
              <div className="h-28 w-28 bg-gray-200"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">gray-300</p>
              <p className="text-footnote text-gray-600">#EDEDED</p>
              <div className="h-28 w-28 bg-gray-300"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">gray-400</p>
              <p className="text-footnote text-gray-600">#DDE0E4</p>
              <div className="h-28 w-28 bg-gray-400"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">gray-500-alternative</p>
              <p className="text-footnote text-gray-600">#D4D7DD</p>
              <div className="h-28 w-28 bg-gray-500-alternative"></div>
              <p className="text-footnote text-gray-600">#D4D7DD</p>
              <div className="h-28 w-28 bg-gray-500-alternative"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">gray-600-hint</p>
              <p className="text-footnote text-gray-600">#BCC2CA</p>
              <div className="h-28 w-28 bg-gray-600-hint"></div>
              <p className="text-footnote text-gray-600">#BCC2CA</p>
              <div className="h-28 w-28 bg-gray-600-hint"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">gray-700-info</p>
              <p className="text-footnote text-gray-600">#949CA8</p>
              <div className="h-28 w-28 bg-gray-700-info"></div>
              <p className="text-footnote text-gray-600">#949CA8</p>
              <div className="h-28 w-28 bg-gray-700-info"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">gray-800</p>
              <p className="text-footnote text-gray-600">#778292</p>
              <div className="h-28 w-28 bg-gray-800"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">gray-900</p>
              <p className="text-footnote text-gray-600">#444A54</p>
              <div className="h-28 w-28 bg-gray-900"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">gray-950-dark</p>
              <p className="text-footnote text-gray-600">#252730</p>
              <div className="h-28 w-28 bg-gray-950-dark"></div>
              <p className="text-footnote text-gray-600">#252730</p>
              <div className="h-28 w-28 bg-gray-950-dark"></div>
            </div>
          </div>
        </div>
        {/* 파란색 계열 */}
        <div className="flex flex-col gap-2">
          <h2 className="text-title4">Blue</h2>
          <div className="flex flex-wrap">
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">blue-050-bg</p>
              <p className="text-footnote text-gray-600">#EDF0FD</p>
              <div className="h-28 w-28 bg-blue-050-bg"></div>
              <p className="text-footnote text-gray-600">#EDF0FD</p>
              <div className="h-28 w-28 bg-blue-050-bg"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">blue-100</p>
              <p className="text-footnote text-gray-600">#D9E0FB</p>
              <div className="h-28 w-28 bg-blue-100"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">blue-200</p>
              <p className="text-footnote text-gray-600">#B7C9F7</p>
              <div className="h-28 w-28 bg-blue-200"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">blue-300</p>
              <p className="text-footnote text-gray-600">#8FAEF4</p>
              <div className="h-28 w-28 bg-blue-300"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">blue-400</p>
              <p className="text-footnote text-gray-600">#6F99F1</p>
              <div className="h-28 w-28 bg-blue-400"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">blue-500-secondary</p>
              <p className="text-footnote text-gray-600">#4F7FEC</p>
              <div className="h-28 w-28 bg-blue-500-secondary"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">blue-600</p>
              <p className="text-footnote text-gray-600">#3B68E9</p>
              <div className="h-28 w-28 bg-blue-600"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">blue-700</p>
              <p className="text-footnote text-gray-600">#2E57E7</p>
              <div className="h-28 w-28 bg-blue-700"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">blue-800-primary</p>
              <p className="text-footnote text-gray-600">#204AE5</p>
              <div className="h-28 w-28 bg-blue-800-primary"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">blue-900</p>
              <p className="text-footnote text-gray-600">#1939B5</p>
              <div className="h-28 w-28 bg-blue-900"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Typography Section */}
      <div className="flex w-full flex-col gap-2 rounded-large border border-gray-400 p-4">
        <h2 className="text-title2">Typography</h2>
        <p className="text-largeTitle">Large Title 텍스트</p>
        <p className="text-title1">Title 1 텍스트</p>
        <p className="text-title2">Title 2 텍스트</p>
        <p className="text-title3">Title 3 텍스트</p>
        <p className="text-title4">Title 4 텍스트</p>
        <p className="text-subtitle1">Subtitle 1 텍스트</p>
        <p className="text-subtitle2">Subtitle 2 텍스트</p>
        <p className="text-subtitle3">Subtitle 3 텍스트</p>
        <p className="text-subtitle4">Subtitle 4 텍스트</p>
        <p className="text-body1">Body 1 텍스트</p>
        <p className="text-body2">Body 2 텍스트</p>
        <p className="text-body3">Body 3 텍스트</p>
        <p className="text-caption1">Caption 1 텍스트</p>
        <p className="text-caption2">Caption 2 텍스트</p>
        <p className="text-caption3">Caption 3 텍스트</p>
        <p className="text-footnote">Footnote 텍스트</p>
      </div>
      {/* Border Radius Section */}
      <div className="flex w-full flex-col gap-2 rounded-large border border-gray-400 p-4">
        <h2 className="text-title2">Border Radius</h2>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col items-center gap-1">
            <p className="text-caption3">small</p>
            <p className="text-footnote text-gray-600">8px</p>
            <div className="h-28 w-28 rounded-small bg-gray-900"></div>
            <p className="text-footnote text-gray-600">8px</p>
            <div className="h-28 w-28 rounded-small bg-gray-900"></div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-caption3">medium</p>
            <p className="text-footnote text-gray-600">10px</p>
            <div className="h-28 w-28 rounded-medium bg-gray-900"></div>
            <p className="text-footnote text-gray-600">10px</p>
            <div className="h-28 w-28 rounded-medium bg-gray-900"></div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-caption3">large</p>
            <p className="text-footnote text-gray-600">12px</p>
            <div className="h-28 w-28 rounded-large bg-gray-900"></div>
            <p className="text-footnote text-gray-600">12px</p>
            <div className="h-28 w-28 rounded-large bg-gray-900"></div>
          </div>
        </div>
      </div>
      {/* Box Shadow Section */}
      <div className="flex w-full flex-col gap-2 rounded-large border border-gray-400 p-4">
        <h2 className="text-title2">Box Shadow</h2>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col items-center gap-1">
            <p className="text-caption3">shadow1</p>
            <p className="text-footnote text-gray-600">y: 4px</p>
            <div className="h-28 w-28 border border-gray-200 bg-white shadow-shadow1"></div>
            <p className="text-footnote text-gray-600">y: 4px</p>
            <div className="h-28 w-28 border border-gray-200 bg-white shadow-shadow1"></div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-caption3">shadow2</p>
            <p className="text-footnote text-gray-600">y: 8px</p>
            <div className="h-28 w-28 border border-gray-200 bg-white shadow-shadow2"></div>
            <p className="text-footnote text-gray-600">y: 8px</p>
            <div className="h-28 w-28 border border-gray-200 bg-white shadow-shadow2"></div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-caption3">shadow3</p>
            <p className="text-footnote text-gray-600">y: 16px</p>
            <div className="h-28 w-28 border border-gray-200 bg-white shadow-shadow3"></div>
            <p className="text-footnote text-gray-600">y: 16px</p>
            <div className="h-28 w-28 border border-gray-200 bg-white shadow-shadow3"></div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-caption3">shadow4</p>
            <p className="text-footnote text-gray-600">y: 24px</p>
            <div className="h-28 w-28 border border-gray-200 bg-white shadow-shadow4"></div>
            <p className="text-footnote text-gray-600">y: 24px</p>
            <div className="h-28 w-28 border border-gray-200 bg-white shadow-shadow4"></div>
          </div>
        </div>
      </div>

      {/** Button Section */}
      <div className="flex w-full flex-col gap-2 rounded-large border border-gray-400 p-4">
        <h2 className="text-title2">Button</h2>
        <Button variant={"default"}>다음</Button>
        <Button variant={"default"} disabled>
          다음
        </Button>
      </div>

      {/* Tab Section */}
      <div className="flex w-full flex-col gap-2 rounded-large border border-gray-400 p-4">
        <h2 className="text-title2">Tab</h2>
        <Tab tabOptions={tabItems} selected={selectedTab} onChange={setSelectedTab} />
        <div className="mt-4 text-body1">
          {selectedTab === "detail" && <p>상세 정보 내용입니다.</p>}
          {selectedTab === "review" && <p>리뷰 내용입니다.</p>}
        </div>
        <Tab tabOptions={tabItems2} selected={selectedTab} onChange={setSelectedTab} />
        <div className="mt-4 text-body1">
          {selectedTab === "one" && <p>월세</p>}
          {selectedTab === "two" && <p>전세</p>}
          {selectedTab === "three" && <p>매매</p>}
        </div>
      </div>

      {/* propertyCard Section */}
      <div className="flex w-full flex-col gap-2 rounded-large border border-gray-400 p-4">
        <h2 className="text-title2">Property Card</h2>
        <p>기본 카드</p>
        <PropertyCard
          propertyId={1}
          order={1}
          tradeTypeName={"전세"}
          rentPrice={undefined}
          warrantPrice={53000}
          dealPrice={0}
          dealOrWarrantPrc={"5억 3,000"}
          summary={["풀옵션", "xx역 도보 n분", "대학교 인접"]}
          realestateTypeName={"주상복합"}
          aptName={"방배마에스트로"}
          articleName={"방배마에스트로"}
          buildingName={"1동 703호"}
          area2={"34.5"}
          isBookmarked={false}
          isActive={true}
          imageUrl={"/imgs/propertyExample.png"}
          latitude={37.471515}
          longitude={126.972487}
        />
        <p>{"isNumberVisible={false}"}</p>
        <PropertyCard
          propertyId={2}
          order={2}
          tradeTypeName={"전세"}
          rentPrice={undefined}
          warrantPrice={53000}
          dealPrice={0}
          dealOrWarrantPrc={"5억 3,000"}
          summary={["풀옵션", "xx역 도보 n분", "대학교 인접"]}
          realestateTypeName={"주상복합"}
          aptName={"방배마에스트로"}
          articleName={"방배마에스트로"}
          buildingName={"1동 703호"}
          area2={"34.5"}
          isBookmarked={false}
          isActive={true}
          imageUrl={"/imgs/propertyExample.png"}
          latitude={37.471515}
          longitude={126.972487}
          isNumberVisible={false}
        />
        <p>{"isActive={false}"}</p>
        <PropertyCard
          propertyId={3}
          order={3}
          tradeTypeName={"전세"}
          rentPrice={undefined}
          warrantPrice={53000}
          dealPrice={0}
          dealOrWarrantPrc={"5억 3,000"}
          summary={["풀옵션", "xx역 도보 n분", "대학교 인접"]}
          realestateTypeName={"주상복합"}
          aptName={"방배마에스트로"}
          articleName={"방배마에스트로"}
          buildingName={"1동 703호"}
          area2={"34.5"}
          isBookmarked={false}
          isActive={false}
          imageUrl={"/imgs/propertyExample.png"}
          latitude={37.471515}
          longitude={126.972487}
        />
        <p>{"size='sm'"}</p>
        <PropertyCard
          propertyId={4}
          order={4}
          tradeTypeName={"전세"}
          rentPrice={undefined}
          warrantPrice={53000}
          dealPrice={0}
          dealOrWarrantPrc={"5억 3,000"}
          summary={["풀옵션", "xx역 도보 n분", "대학교 인접"]}
          realestateTypeName={"주상복합"}
          aptName={"방배마에스트로"}
          articleName={"방배마에스트로"}
          buildingName={"1동 703호"}
          area2={"34.5"}
          isBookmarked={false}
          isActive={true}
          imageUrl={"/imgs/propertyExample.png"}
          latitude={37.471515}
          longitude={126.972487}
          size="sm"
        />
      </div>
    </div>
  );
}
