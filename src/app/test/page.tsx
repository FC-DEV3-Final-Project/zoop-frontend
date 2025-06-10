"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Tab } from "@/components/Tab";
import PropertyCard from "@/components/common/PropertyCard";
import BottomSheet from "@/components/BottomSheet";

import { Header } from "@/layout/Header";
import Input from "@/components/ui/input";

const tabItems = [
  { label: "상세 정보", value: "detail" },
  { label: "리뷰", value: "review" },
];

const tabItems2 = [
  { label: "월세", value: "one" },
  { label: "전세", value: "two" },
  { label: "매매", value: "three" },
];

const sortOptions = [
  { label: "가격 높은 순", value: "high" },
  { label: "가격 낮은 순", value: "low" },
];

export default function Test() {
  const [selectedTab, setSelectedTab] = useState(tabItems[0].value); // 항상 첫 번째 탭이 활성화된 채로 켜지길 원한다면,,
  const [selectedItem, setSelectedItem] = useState<{ label: string; value: string } | null>(null);
  const [inputText, setInputText] = useState(""); // input에 입력한 텍스트 관리

  return (
    <div className="flex flex-col items-center justify-center gap-1 p-4">
      {/* Input Section */}
      <div className="flex w-full flex-col gap-2 rounded-large border border-gray-400 bg-[#DFDFDF] p-4">
        <h1 className="text-title1">Input</h1>
        <Input
          placeholder="Enter로 전송하세요"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onSend={() => {
            console.log("전송됨:", inputText);
            setInputText("");
          }}
        />
      </div>

    <div className="flex flex-col items-center justify-center gap-1 px-4 pt-16">
      {/** Header Section */}
      <Header bgColorClassName="bg-gray-100">
        <Header.Hamburger onHamburgerClick={() => alert("뒤로가기 클릭")} />
        <Header.Prev onPrevClick={() => alert("뒤로가기 클릭")} />
        <Header.Title>Guide</Header.Title>
        <Header.Close onCloseClick={() => alert("닫기 클릭")} />
      </Header>

      {/* BottomSheet Section */}
      <div className="flex w-full flex-col gap-2 rounded-large border border-gray-400 p-4">
        <h1 className="text-title1">BottomSheet</h1>
        <BottomSheet
          trigger={
            <button className="flex cursor-pointer items-center gap-[3px] rounded-[100px] border border-[#E4E4E4] px-3 py-1">
              {selectedItem?.label ?? "정렬 방식"}
              <img src="/icons/arrow-down.svg" alt="화살표" className="h-3 w-3" />
            </button>
          }
          title="정렬 방식"
          items={sortOptions}
          selectedValue={selectedItem?.value}
          onSelect={(item) => {
            setSelectedItem(item);
          }}
          toggleable={true}
        />
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
        <PropertyCard
          itemId={1}
          itemNumber={1}
          imageUrl="/imgs/propertyExample.png"
          transactionType="전세"
          price="5억 3,000"
          address="방배마에스트로{주상복합}"
          detailAddress="101동 703호"
          buildingType="아파트"
          area="34.5㎡"
          tags={["풀옵션", "xx역 도보 n분", "대학교 인접", "주차공간 있음", "반려동물 가능"]}
        />
        <PropertyCard
          itemId={2}
          itemNumber={2}
          imageUrl="/imgs/propertyExample.png"
          transactionType="전세"
          price="5억 3,000"
          address="방배마에스트로{주상복합}"
          detailAddress="101동 703호"
          buildingType="아파트"
          area="34.5㎡"
          tags={["풀옵션", "xx역 도보 n분", "대학교 인접", "주차공간 있음", "반려동물 가능"]}
          isActive={false}
        />
        <PropertyCard
          itemId={3}
          itemNumber={3}
          imageUrl="/imgs/propertyExample.png"
          transactionType="전세"
          price="5억 3,000"
          address="방배마에스트로{주상복합}"
          detailAddress="101동 703호"
          buildingType="아파트"
          area="34.5㎡"
          tags={["xx역 도보 n분", "대학교 인접", "풀옵션"]}
          size="sm"
        />
      </div>
    </div>
  );
}
