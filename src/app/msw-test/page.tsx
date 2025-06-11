"use client";

import { useEffect, useState } from "react";

export default function MswTestPage() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/user");
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
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">응답 데이터:</h2>
          <pre className="rounded bg-gray-100 p-4">{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
