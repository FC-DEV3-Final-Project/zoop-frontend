import { Button } from "@/components/ui/button";

export default function Test() {
  return (
    <div className="flex flex-col items-center justify-center gap-1 p-4">
      <h1 className="text-title1">Guide</h1>
      {/* Color Section */}
      <div className="flex flex-col gap-4 p-4 border border-gray-400 rounded-large">
        <h1 className="text-title1">Color</h1>
        {/* 흰색,검정색 */}
        <div className="flex flex-wrap">
          <div className="flex flex-col items-center gap-1">
            <p className="text-caption3">white</p>
            <p className="text-gray-600 text-footnote">#FFFFFF</p>
            <div className="bg-white border border-gray-200 h-28 w-28"></div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-caption3">black</p>
            <p className="text-gray-600 text-footnote">#000000</p>
            <div className="bg-black h-28 w-28"></div>
          </div>
        </div>
        {/* 회색 계열 */}
        <div className="flex flex-col gap-2">
          <h2 className="text-title4">Gray</h2>
          <div className="flex flex-wrap">
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">gray-050</p>
              <p className="text-gray-600 text-footnote">#FCFCFC</p>
              <div className="h-28 w-28 bg-gray-050"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">gray-100</p>
              <p className="text-gray-600 text-footnote">#F8F8F8</p>
              <div className="bg-gray-100 h-28 w-28"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">gray-200</p>
              <p className="text-gray-600 text-footnote">#F3F3F3</p>
              <div className="bg-gray-200 h-28 w-28"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">gray-300</p>
              <p className="text-gray-600 text-footnote">#EDEDED</p>
              <div className="bg-gray-300 h-28 w-28"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">gray-400</p>
              <p className="text-gray-600 text-footnote">#DDE0E4</p>
              <div className="bg-gray-400 h-28 w-28"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">gray-500-alternative</p>
              <p className="text-gray-600 text-footnote">#D4D7DD</p>
              <div className="h-28 w-28 bg-gray-500-alternative"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">gray-600-hint</p>
              <p className="text-gray-600 text-footnote">#BCC2CA</p>
              <div className="h-28 w-28 bg-gray-600-hint"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">gray-700-info</p>
              <p className="text-gray-600 text-footnote">#949CA8</p>
              <div className="h-28 w-28 bg-gray-700-info"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">gray-800</p>
              <p className="text-gray-600 text-footnote">#778292</p>
              <div className="bg-gray-800 h-28 w-28"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">gray-900</p>
              <p className="text-gray-600 text-footnote">#444A54</p>
              <div className="bg-gray-900 h-28 w-28"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">gray-950-dark</p>
              <p className="text-gray-600 text-footnote">#252730</p>
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
              <p className="text-gray-600 text-footnote">#EDF0FD</p>
              <div className="h-28 w-28 bg-blue-050-bg"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">blue-100</p>
              <p className="text-gray-600 text-footnote">#D9E0FB</p>
              <div className="bg-blue-100 h-28 w-28"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">blue-200</p>
              <p className="text-gray-600 text-footnote">#B7C9F7</p>
              <div className="bg-blue-200 h-28 w-28"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">blue-300</p>
              <p className="text-gray-600 text-footnote">#8FAEF4</p>
              <div className="bg-blue-300 h-28 w-28"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">blue-400</p>
              <p className="text-gray-600 text-footnote">#6F99F1</p>
              <div className="bg-blue-400 h-28 w-28"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">blue-500-secondary</p>
              <p className="text-gray-600 text-footnote">#4F7FEC</p>
              <div className="h-28 w-28 bg-blue-500-secondary"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">blue-600</p>
              <p className="text-gray-600 text-footnote">#3B68E9</p>
              <div className="bg-blue-600 h-28 w-28"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">blue-700</p>
              <p className="text-gray-600 text-footnote">#2E57E7</p>
              <div className="bg-blue-700 h-28 w-28"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">blue-800-primary</p>
              <p className="text-gray-600 text-footnote">#204AE5</p>
              <div className="h-28 w-28 bg-blue-800-primary"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-caption3">blue-900</p>
              <p className="text-gray-600 text-footnote">#1939B5</p>
              <div className="bg-blue-900 h-28 w-28"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Typography Section */}
      <div className="flex flex-col w-full gap-2 p-4 border border-gray-400 rounded-large">
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
      <div className="flex flex-col w-full gap-2 p-4 border border-gray-400 rounded-large">
        <h2 className="text-title2">Border Radius</h2>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col items-center gap-1">
            <p className="text-caption3">small</p>
            <p className="text-gray-600 text-footnote">8px</p>
            <div className="bg-gray-900 h-28 w-28 rounded-small"></div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-caption3">medium</p>
            <p className="text-gray-600 text-footnote">10px</p>
            <div className="bg-gray-900 h-28 w-28 rounded-medium"></div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-caption3">large</p>
            <p className="text-gray-600 text-footnote">12px</p>
            <div className="bg-gray-900 h-28 w-28 rounded-large"></div>
          </div>
        </div>
      </div>
      {/* Box Shadow Section */}
      <div className="flex flex-col w-full gap-2 p-4 border border-gray-400 rounded-large">
        <h2 className="text-title2">Box Shadow</h2>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col items-center gap-1">
            <p className="text-caption3">shadow1</p>
            <p className="text-gray-600 text-footnote">y: 4px</p>
            <div className="bg-white border border-gray-200 h-28 w-28 shadow-shadow1"></div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-caption3">shadow2</p>
            <p className="text-gray-600 text-footnote">y: 8px</p>
            <div className="bg-white border border-gray-200 h-28 w-28 shadow-shadow2"></div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-caption3">shadow3</p>
            <p className="text-gray-600 text-footnote">y: 16px</p>
            <div className="bg-white border border-gray-200 h-28 w-28 shadow-shadow3"></div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-caption3">shadow4</p>
            <p className="text-gray-600 text-footnote">y: 24px</p>
            <div className="bg-white border border-gray-200 h-28 w-28 shadow-shadow4"></div>
          </div>
        </div>
      </div>
      {/** Button Section */}
      <Button variant={"default"}>다음</Button>
      <Button variant={"default"} disabled>
        다음
      </Button>
    </div>
  );
}
