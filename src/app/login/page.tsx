"use client";

import Flex from "@/components/common/shared/layout/Flex";
// import LoginButtonSection from "@/components/features/pages/LoginButtonSection";

import LoginTitleSection from "@/components/features/pages/LoginTitleSection";
import dynamic from "next/dynamic";
const LoginButtonSection = dynamic(
  () => import("@/components/features/pages/LoginButtonSection"),
  { ssr: false }
);

export default function LoginPage() {
  return (
    <Flex flexDirection="flex-col" alignItems="items-center" gap="gap-12">
      <LoginTitleSection />
      <LoginButtonSection />
    </Flex>
  );
}
