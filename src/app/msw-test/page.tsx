"use client";

import { useState } from "react";

export default function MswTestPage() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/user-info");
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError("데이터를 불러오는데 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">MSW 테스트 페이지</h1>

      <button
        onClick={fetchData}
        disabled={isLoading}
        className="mb-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:bg-blue-300"
      >
        {isLoading ? "로딩 중..." : "데이터 가져오기"}
      </button>

      {error && <div className="mb-4 text-red-500">{error}</div>}

      {data && (
        <div className="rounded-lg border p-6 shadow-sm">
          <div className="flex items-center space-x-4">
            {data.profileImage && (
              <div className="relative h-20 w-20 overflow-hidden rounded-full">
                <img src={data.profileImage} alt="프로필 이미지" className="object-cover" />
              </div>
            )}
            <div>
              <h2 className="text-xl font-semibold">{data.name}</h2>
              <p className="text-gray-600">{data.email}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
