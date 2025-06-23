"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function NotFoundProperty() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <AlertTriangle className="mb-4 h-10 w-10 text-yellow-500" />
      <h1 className="text-title6 font-bold text-gray-900">존재하지 않는 매물입니다</h1>
      <p className="mt-2 text-body2 text-gray-600">
        매물이 삭제되었거나 주소가 잘못되었을 수 있어요.
      </p>
      <Button className="mt-6" onClick={() => router.push("/")}>
        홈으로 돌아가기
      </Button>
    </div>
  );
}
