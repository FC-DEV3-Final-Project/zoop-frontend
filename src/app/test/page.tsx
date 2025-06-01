export default function Test() {
  return (
    <div className="flex min-h-screen flex-col items-start justify-center gap-4 p-8">
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
            <div className="bg-gray-050 h-28 w-28"></div>
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
            <div className="bg-gray-500-alternative h-28 w-28"></div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-caption3">gray-600-hint</p>
            <p className="text-footnote text-gray-600">#BCC2CA</p>
            <div className="bg-gray-600-hint h-28 w-28"></div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-caption3">gray-700-info</p>
            <p className="text-footnote text-gray-600">#949CA8</p>
            <div className="bg-gray-700-info h-28 w-28"></div>
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
            <div className="bg-gray-950-dark h-28 w-28"></div>
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
            <div className="bg-blue-050-bg h-28 w-28"></div>
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
            <div className="bg-blue-500-secondary h-28 w-28"></div>
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
            <div className="bg-blue-800-primary h-28 w-28"></div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-caption3">blue-900</p>
            <p className="text-footnote text-gray-600">#1939B5</p>
            <div className="h-28 w-28 bg-blue-900"></div>
          </div>
        </div>
      </div>

      {/* 텍스트 스타일 */}
      <div className="flex flex-col gap-2">
        <h2 className="text-title2">텍스트 스타일</h2>
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
    </div>
  );
}
