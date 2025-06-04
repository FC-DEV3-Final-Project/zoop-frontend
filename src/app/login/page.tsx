import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center">
      <div className="absolute left-0 top-0 flex w-full items-center justify-between p-4">
        <img src="/icons/arrow-left.svg" alt="뒤로가기" className="h-6 w-6" />
        <img src="/icons/x.svg" alt="닫기" className="h-6 w-6" />
      </div>
      <div className="flex flex-col items-center gap-4">
        {/* 로고 + 텍스트 */}
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-[15px]">
            <img src="/icons/jupjup_logo.svg" alt="로고" className="h-8 w-8" />
            <span className="text-center text-[32px] font-bold leading-[1.4] text-blue-800-primary">
              ZOOP
            </span>
          </div>
          <span className="text-center text-[18px] font-medium leading-[1.4] text-black">
            부동산 매물 추천 AI 챗봇
          </span>
        </div>

        {/* 버튼 */}
        <button className="flex h-[50px] w-[335px] items-center justify-center gap-2 rounded-[8px] bg-yellow-300 font-medium">
          <img src="/icons/kakako-logo.svg" alt="카카오톡 로고" className="h-[18px] w-[18px]" />
          카카오톡으로 로그인
        </button>

        {/* 링크 */}
        <Link href="/about" className="text-sm text-blue-600 underline">
          둘러보기
        </Link>
      </div>
      <div className="relative w-full max-w-md">
        <label className="absolute -top-2 left-3 bg-white px-1 text-sm">닉네임</label>

        <input
          id="nickname"
          type="text"
          className="w-full rounded-[12px] border px-4 py-3 outline-none focus:ring-2"
          placeholder=""
        />
      </div>
    </div>
  );
}
