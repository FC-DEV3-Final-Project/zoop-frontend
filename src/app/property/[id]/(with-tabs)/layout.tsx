import { ReactNode } from "react";
import PropertyLayout from "@/components/property/PropertyLayout";

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <PropertyLayout id={id}>{children}</PropertyLayout>;
}
