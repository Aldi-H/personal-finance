"use client";

import { pageMeta } from "@/config/page-meta";
import { usePathname } from "next/navigation";
import React from "react";

interface PfPageHeaderProps {
  action?: React.ReactNode;
}

const PfPageHeader = ({ action }: PfPageHeaderProps) => {
  const pathname = usePathname();
  const pageTitle = pageMeta[pathname as keyof typeof pageMeta] ?? "";

  return (
    <header className="flex h-(--header-height) py-1.5">
      <h1 className="text-preset-1">{pageTitle}</h1>
      {action && <div className="ml-auto">{action}</div>}
    </header>
  );
};

export default PfPageHeader;
