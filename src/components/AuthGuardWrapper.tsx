"use client";

import { ReactNode } from "react";
import useAuthGuard from "@/hooks/common/useAuthGuard";

export default function AuthGuardWrapper({ children }: { children: ReactNode }) {
  useAuthGuard();
  return <>{children}</>;
}
